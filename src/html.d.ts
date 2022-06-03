// for UnoCSS attributify mode compact in Volar
// refer: https://github.com/johnsoncodehk/volar/issues/1077#issuecomment-1145361472
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
}
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}
export {}
