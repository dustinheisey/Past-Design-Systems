import { css } from 'lit-element';

export const reset = css`
  :host {
    display: block;
    font-family: var(--font-family);
    line-height: 1.5;
    color: var(--color-fg-primary);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    min-block-size: 0;
  }

  [hidden] {
    display: none !important;
  }

  img {
    max-inline-size: 100%;
  }

  .visually-hidden {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* TODO: add focus styles */
`;
