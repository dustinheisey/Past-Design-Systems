import { css } from 'lit-element';

export const cover = css`
  .cover {
    display: flex;
    flex-direction: column;
    min-block-size: var(--min-block-size, 100vh);
    padding: var(--inset);
  }

  .cover > * {
    margin-block: var(--gap);
  }

  .cover > :only-child,
  .cover > :nth-child(2) {
    margin-block: auto;
  }

  .cover > :not(:only-child):first-child {
    margin-block-start: 0;
  }

  .cover > :not(:only-child):last-child {
    margin-block-end: 0;
  }
`;
