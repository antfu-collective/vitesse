declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ReturnType<ComponentOptions>
  export default component
}

declare module '*.md' {
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
