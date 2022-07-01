import { css } from 'lit-element';

export const stack = css`
  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: var(--inset);
  }

  .stack > * {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .stack > * + * {
    margin-block-start: var(--space, var(--gap));
  }

  .stack > [split-below] {
    margin-block-end: auto;
  }
`;
