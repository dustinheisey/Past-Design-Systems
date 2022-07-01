import { css } from 'lit-element';

export const sidebar = css`
  .sidebar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    padding: var(--inset);
  }

  .sidebar > [fixed] {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: var(--min);
  }

  .sidebar > :not([fixed]) {
    flex-grow: 999;
    flex-basis: 0;
    min-inline-size: 50%;
  }
`;
