export function storyProps(props) {
  return {
    storybookArgs: props
  }
}

export function getProperty(prop) {
  return getComputedStyle(document.querySelector(':root')).getPropertyValue(prop)
}