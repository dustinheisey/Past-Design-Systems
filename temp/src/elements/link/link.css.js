import { css } from 'lit-element';

export const link = css`
  a:not(.button),
  .link {
    text-decoration: underline;
    border: 0;
    color: var(--color-brand);
    cursor: pointer;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    border-radius: var(--radius-s);
    display: inline;
    text-align: start;
    padding: 0;
  }
`;
