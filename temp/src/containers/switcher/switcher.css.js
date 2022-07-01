import { css } from 'lit-element';

export const switcher = css`
  .switcher {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    padding: var(--inset);
  }

  .switcher > * {
    flex-grow: var(--grow, 1);
    max-inline-size: 100%;
  }

  .switcher[collapse-below='phone'] > * {
    flex-basis: calc(var(--bp-phone) - 100%) * 999;
  }

  .switcher[collapse-below='tablet-portrait'] > * {
    flex-basis: calc(var(--bp-tablet-portrait) - 100%) * 999;
  }

  .switcher[collapse-below='tablet-landscape'] > * {
    flex-basis: calc(var(--bp-tablet-landscape) - 100%) * 999;
  }

  .switcher[collapse-below='desktop'] > * {
    flex-basis: calc(var(--bp-desktop) - 100%) * 999;
  }

  .switcher[collapse-below='lg-desktop'] > * {
    flex-basis: calc(var(--bp-lg-desktop) - 100%) * 999;
  }

  .switcher > :nth-last-child(n + 5),
  .switcher > :nth-last-child(n + 5) ~ * {
    flex-basis: 100%;
  }
`;
