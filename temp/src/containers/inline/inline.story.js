import { html } from 'lit-element';

export default {
  title: 'Containers/Inline',
  argTypes: {
    inset: {
      control: {
        type: 'select',
        options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl']
      }
    },
    gap: {
      control: {
        type: 'select',
        options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl']
      }
    },
    justify: {
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly'
        ]
      }
    }
  }
};

export const Inline = ({ inset, gap, justify }) =>
  html`
    <div class="inline" inset="${inset}" gap="${gap}" style="--justify: ${justify}">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
    </div>
  `;
