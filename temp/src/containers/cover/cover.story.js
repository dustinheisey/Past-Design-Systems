import { html } from 'lit-element';

export default {
  title: 'Containers/Cover',
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
    minBlockSize: {
      control: { type: 'text' }
    }
  }
};

export const Cover = ({ inset, gap, minBlockSize }) => html`
  <div
    class="cover"
    inset="${inset}"
    gap="${gap}"
    style="--min-block-size: ${minBlockSize || '100vh'}"
  >
    <h3>hello</h3>
    <h1>Welcome To My Site, Visitor!</h1>
    <p>What I do</p>
  </div>
`;
