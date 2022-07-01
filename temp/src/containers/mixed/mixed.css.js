import { css } from 'lit-element';

export const mixed = css`
  .mixed {
    display: flex;
    flex-direction: column;
    block-size: 100%;
  }

  .mixed > [fixed] {
    flex-shrink: 0;
  }

  .mixed > :not([fixed]) {
    overflow-y: auto;
  }
`;
