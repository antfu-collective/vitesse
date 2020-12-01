## File-based Routing

Routes will auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-voie`](https://github.com/vamplate/vite-plugin-voie) for more details.

### Path Aliasing

You can use `/~/` aliasing to `./src/` folder.

For example, instead of having

```ts
import { locales } from '../../../../messages'
```

now you can use

```ts
import { locales } from '/~/messages'
```
