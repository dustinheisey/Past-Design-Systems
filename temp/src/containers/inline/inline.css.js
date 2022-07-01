import { css } from 'lit-element';

export const inline = css`
  .inline {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: var(--inset);
    justify-content: var(--justify, flex-start);
    gap: var(--gap);
  }
`;
