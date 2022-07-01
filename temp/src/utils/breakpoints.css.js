import { css } from 'lit-element';

export const bp = (screen, cssProperties) => {
  if (screen === 'phone') {
    return css`
      @media (min-width: 20em) {
        ${cssProperties}
      }
    `;
  }

  if (screen === 'tablet-portrait') {
    return css`
      @media (min-width: 38em) {
        ${cssProperties}
      }
    `;
  }

  if (screen === 'tablet-landscape') {
    return css`
      @media (min-width: 56em) {
        ${cssProperties}
      }
    `;
  }

  if (screen === 'desktop') {
    return css`
      @media (min-width: 75em) {
        ${cssProperties}
      }
    `;
  }

  if (screen === 'lg-desktop') {
    return css`
      @media (min-width: 112em) {
        ${cssProperties}
      }
    `;
  }

  return css``;
};
