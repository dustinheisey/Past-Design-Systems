import { css } from 'lit-element';

export const icon = css`
  .icon {
    inline-size: 0.75em;
    inline-size: 1cap;
    block-size: 0.75em;
    block-size: 1cap;
  }

  .with-icon {
    display: inline-flex;
  }

  .with-icon > .icon {
    margin-inline-end: var(--gap);
  }
`;
