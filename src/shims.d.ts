declare interface Window {
  // Extend the window.
  appVersion?: string
}

// With `vite-plugin-md`, markdowns can be treat as Vue components.
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
