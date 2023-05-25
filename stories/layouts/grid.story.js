export default {
  title: 'Layouts/Grid',
  args: {
    columns: 3
  }
}

export const Default = ({ columns }) =>
  `
    <div class="grid grid-${columns}">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'Use the Grid component when you want to display elements in a grid layout with automatically adjusting column width and customizable row and column spans.'
    },
    source: {
      code: `
<div class="center">
</div>
    `
    }
  }
}

export const TwoColumns = () =>
  `
    <div class="grid grid-2">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `

export const ThreeColumns = () =>
  `
    <div class="grid grid-3">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `

export const FourColumns = () =>
  `
    <div class="grid grid-4">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `

export const FiveColumns = () =>
  `
    <div class="grid grid-5">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `

export const SixColumns = () =>
  `
    <div class="grid grid-6">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `

export const Spanning = () =>
  `
    <div class="grid grid-3">
      <img src="https://placehold.co/600x400" alt="image" class="span-2" />
      <div class="frame">
        <img src="https://placehold.co/600x400" alt="image" />
      </div>
      <div class="frame">
        <img src="https://placehold.co/600x400" alt="image" />
      </div>
      <img src="https://placehold.co/600x400" alt="image" class="span-2" />
    </div>
  `
