import { css } from 'lit-element';

export const center = css`
  /* Typical Use: Marketing or Documentation Websites */
  .center {
    box-sizing: content-box; /* add padding in addition to content width */
    max-inline-size: var(--max-inline-size, 75ch);
    margin-inline: auto;
    padding-inline: var(--inset);
    display: flex;
    place-items: center;
  }
`;
