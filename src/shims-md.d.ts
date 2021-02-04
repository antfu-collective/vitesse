declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
