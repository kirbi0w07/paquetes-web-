import './style.css'

const themeToggle = document.querySelector('#themeToggle')
const themeIcon = document.querySelector('#themeIcon')

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme) {
  const isDark = theme === 'dark'

  document.documentElement.classList.toggle('dark', isDark)

  localStorage.setItem('theme', theme)

  updateThemeIcon(isDark)
}

function updateThemeIcon(isDark) {
  if (!themeIcon) return

  // Si estamos en dark, mostramos el sol
  // porque al hacer click volveremos a light.
  themeIcon.textContent = isDark ? '☀️' : '🌙'
}

const initialTheme = getInitialTheme()

applyTheme(initialTheme)

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark')

  applyTheme(isDark ? 'light' : 'dark')
})