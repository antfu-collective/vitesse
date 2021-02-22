import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface UserModuleInstaller {
  install: UserModule
}

export type SchemaValue = 'auto' | 'dark' | 'light'
