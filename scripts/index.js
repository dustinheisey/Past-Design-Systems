import { readingProgress } from './funcs/reading-progress.js'
import { scrollingNav } from './funcs/scrolling-nav.js'
import { range } from './funcs/range.js'
import { darkMode } from './funcs/dark-mode.js'
import { splitSlider } from './funcs/split-slider.js'

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('#navbar')
  const progress = document.getElementById('reading-progress')
  const budgetInput = document.getElementById('budget')
  const darkModeToggle = document.querySelector('#theme-toggle')
  const slider = document.querySelector('.slider')

  if (darkModeToggle) darkMode()
  if (budgetInput) range()
  if (progress) readingProgress()
  if (navbar) scrollingNav()
  if(slider) splitSlider()
})
