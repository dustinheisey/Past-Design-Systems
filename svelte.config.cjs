const preprocess = require('svelte-preprocess')
const node = require('@sveltejs/adapter-node')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [preprocess({ postcss: true })],
  extensions: ['.svelte'],
  kit: {
    adapter: node(),
    target: '#svelte',
    vite: () => ({
      resolve: {
        alias: {
          $styles: '/src/styles/index.css',
          $components: '/src/components',
          $layout: '/src/styles/layout',
          $sections: '/src/sections'
        }
      }
    })
  }
}
