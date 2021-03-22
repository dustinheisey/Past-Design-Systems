const preprocess = require('svelte-preprocess')

/** @type {import('@sveltejs/kit').Config} */

module.exports = {
  preprocess: [preprocess({ postcss: true })],
  kit: {
    adapter: '@sveltejs/adapter-node',
    target: '#svelte'
  }
}
