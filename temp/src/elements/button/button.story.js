import { html } from 'lit-element';

export default {
  title: 'Elements/Button'
};

export const Button = ({ variant }) =>
  html` <button type="button" variant="${variant}" class="button">Hello</button> `;

Button.args = {
  variant: 'primary'
};
