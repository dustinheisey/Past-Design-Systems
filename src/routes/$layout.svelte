<script>
  import config from '../../system.config.js'
  import '$styles/reset.css'
  import '$styles/tokens.css'

  if (config.density === 'high') import('$styles/tokens/high-density.css')
  else if (config.density === 'low') import('$styles/tokens/low-density.css')
</script>

<header>
  <h1>header</h1>
</header>

<main><slot /></main>

<footer><h2>footer</h2></footer>
