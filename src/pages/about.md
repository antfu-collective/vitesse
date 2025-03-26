---
title: About
---

<script setup>
const { t } = useI18n()
useHead({ title: () => t('button.about') })
</script>

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <div i-carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>{{ t('button.about') }}</h3>
</div>

[Vitesse](https://github.com/antfu/vitesse) is an opinionated [Vite](https://github.com/vitejs/vite) starter template made by [@antfu](https://github.com/antfu) for mocking apps swiftly. With **file-based routing**, **components auto importing**, **markdown support**, I18n, PWA and uses **UnoCSS** for styling and icons.

```js
// syntax highlighting example
function vitesse() {
  const foo = 'bar'
  console.log(foo)
}
```

Check out the [GitHub repo](https://github.com/antfu/vitesse) for more details.
