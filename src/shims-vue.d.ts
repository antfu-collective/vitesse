/* eslint-disable import/no-duplicates */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ReturnType<ComponentOptions>
  export default component
}
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ReturnType<ComponentOptions>
  export default component
}
