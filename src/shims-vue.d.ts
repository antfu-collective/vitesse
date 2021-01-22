import { defineComponent } from 'vue'

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module '*.md' {
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
