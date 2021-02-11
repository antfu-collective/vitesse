## Layouts

Vue components in this dir are used as layouts.

The default.vue is used for all pages unless an alternative is specified in the route meta.

With vite-plugin-pages, you can specify the layout in the page's .vue file like this:
```html
<route>
{"meta":{"layout": "users"}}
</route>
```
