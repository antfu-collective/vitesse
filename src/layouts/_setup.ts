// https://github.com/ktsn/vue-router-layout/blob/master/src/index.ts
import {
  VNode,
  Component,
  ConcreteComponent,
  h,
  defineComponent,
  shallowReactive,
} from 'vue'
import { RouteRecordRaw } from 'vue-router'

function normalizeEsModuleComponent(
  comp: Component | { default: Component },
): Component {
  const c: any = comp
  const isEsModule
    = c.__esModule
    || (typeof Symbol !== 'undefined' && c[Symbol.toStringTag] === 'Module')
  return isEsModule ? c.default : c
}

const layouts = import.meta.glob('/src/layouts/*.vue')

export function setupLayouts(routes: RouteRecordRaw[]) {
  const RouterLayout = createRouterLayout((layout: string) => {
    return Promise.resolve(layouts[`/src/layouts/${layout}.vue`]())
  })

  return [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
  ]
}

export function createRouterLayout(
  resolve: (layoutName: string) => Promise<Component | { default: Component }>,
) {
  return defineComponent({
    name: 'RouterLayout',

    async beforeRouteEnter(to, _from, next) {
      const name = to.meta.layout || 'default'
      const layoutComp = name
        ? normalizeEsModuleComponent(await resolve(name))
        : undefined

      next((vm: any) => {
        vm.layoutName = name
        if (name && layoutComp)
          vm.layouts[name] = layoutComp
      })
    },

    async beforeRouteUpdate(to, _from, next) {
      try {
        const name = to.meta.layout || 'default'
        if (name && !this.layouts[name])
          this.layouts[name] = normalizeEsModuleComponent(await resolve(name))

        this.layoutName = name
        next()
      }
      catch (error) {
        next(error)
      }
    },

    data() {
      return {
        layoutName: undefined as string | undefined,
        layouts: shallowReactive(
          Object.create(null) as Record<string, Component>,
        ),
      }
    },

    render(): VNode {
      const layout = this.layoutName && this.layouts[this.layoutName]
      if (!layout)
        return h('span')

      return h(layout as ConcreteComponent, {
        key: this.layoutName,
      })
    },
  })
}
