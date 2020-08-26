## Components

Components in this dir will be auto registered on-demand, powered by [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components).


### `Icon.vue`

You can uses Icons with the following syntax

```html
<Icon icon='mdi:account'/>
```

The icon id follows the rules in [Iconify](https://iconify.design/) which you can use any icons from the supported icon sets. It will only bundles the icons you use, check out [PurgeIcons](https://github.com/antfu/purge-icons) for more details.
