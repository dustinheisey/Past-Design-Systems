import { css } from 'lit-element';

export const grid = css`
  .grid {
    display: grid;
    padding: var(--inset);
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  }
`;
