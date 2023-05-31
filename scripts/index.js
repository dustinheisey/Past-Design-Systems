import { readingProgress } from './funcs/reading-progress.js'
import { scrollingNav } from './funcs/scrolling-nav.js'
import { range } from './funcs/range.js'
import { darkMode } from './funcs/dark-mode.js'

document.addEventListener('DOMContentLoaded', function () {
  readingProgress()
  scrollingNav()
  range()
  darkMode()
})
