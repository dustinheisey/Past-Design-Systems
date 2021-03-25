import config from '../system.config.js'
import '../src/styles/reset.css'
import '../src/styles/tokens.css'

if (config.density === 'low') {
  import('../src/styles/tokens/low-density.css')
} else if (config.density == 'high') {
  import('../src/styles/tokens/high-density.css')
}
