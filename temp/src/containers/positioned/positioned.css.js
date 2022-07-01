import { css } from 'lit-element';

export const positioned = css`
  .positioned {
    position: relative;
  }

  .positioned > .content {
    position: absolute;
  }

  .positioned[position~='top'] > .content {
    bottom: calc(100% + var(--offset, var(--space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }
`;
