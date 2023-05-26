document.addEventListener('DOMContentLoaded', function () {
  // ? Navbar
  const navbar = document.querySelector('#navbar')
  const top = navbar.offsetTop
  function floating() {
    if (window.scrollY > top) {
      navbar.classList.add('floating')
    } else {
      navbar.classList.remove('floating')
    }
  }
  window.addEventListener('scroll', floating)

  // ? Range
  const budgetInput = document.getElementById('budget')
  const budgetValue = document.getElementById('budget-value')

  if (budgetInput) {
    budgetInput.addEventListener('input', function () {
      budgetValue.textContent = '$' + budgetInput.value
    })
  }

  if (window.ResizeObserver) {
    const progress = document.getElementById('reading-progress')

    let timeOfLastScroll = 0
    let requestedAniFrame = false
    function scroll() {
      if (!requestedAniFrame) {
        requestAnimationFrame(updateProgress)
        requestedAniFrame = true
      }
      timeOfLastScroll = Date.now()
    }
    addEventListener('scroll', scroll)

    let winHeight = 1000
    let bottom = 10000
    function updateProgress() {
      requestedAniFrame = false
      const percent = Math.min(
        (document.scrollingElement.scrollTop / (bottom - winHeight)) * 100,
        100
      )
      if (progress) {
        progress.style.transform = `translate(-${100 - percent}vw, 0)`
      }
      if (Date.now() - timeOfLastScroll < 3000) {
        requestAnimationFrame(updateProgress)
        requestedAniFrame = true
      }
    }

    new ResizeObserver(() => {
      bottom =
        document.scrollingElement.scrollTop +
        document.querySelector('#comments,footer').getBoundingClientRect().top
      winHeight = window.innerHeight
      scroll()
    }).observe(document.body)
  }
})

// ? Dark Mode
const storageKey = 'theme-preference'

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild.setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getColorPreference()
}

reflectPreference()

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference()

  // now this script can find and listen for clicks on the control
  document.querySelector('#theme-toggle').addEventListener('click', onClick)
}

const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  setPreference()
}

document.onkeyup = function (e) {
  if (e.key === '\\') {
    onClick()
  }
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })
