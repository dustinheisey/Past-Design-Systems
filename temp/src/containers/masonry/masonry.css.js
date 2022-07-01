import { css } from 'lit-element';

export const masonry = css`
  .masonry {
    columns: var(--columns);
    gap: var(--gap);
    padding: var(--inset);
  }

  .masonry > * {
    break-inside: avoid;
  }

  .masonry > * + * {
    margin-block-start: var(--gap);
  }
`;
