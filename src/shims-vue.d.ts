declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ReturnType<ComponentOptions>
  export default component
}
