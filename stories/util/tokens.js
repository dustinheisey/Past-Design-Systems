export function getProperty (property) {
  return getComputedStyle(document.querySelector(':root')).getPropertyValue(
    property
  )
}
