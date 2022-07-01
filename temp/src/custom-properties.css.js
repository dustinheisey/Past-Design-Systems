import { css } from 'lit-element';

export const customProperties = css`
  :root {
    /* Color */
    --color-brand-100: #f7faf5;
    --color-brand-200: #5f8841;
    --color-brand-300: #346444;
    --color-brand-400: #083216;

    --color-bg-tertiary: #fff;
    --color-bg-secondary: #fcfbf0;
    --color-bg-primary: #bebeb5;

    --color-fg-tertiary: #75756f;
    --color-fg-secondary: #3d3d3a;
    --color-fg-primary: #131312;

    --color-success-100: #44bd32;
    --color-success-200: #44bd32;
    --color-success-300: #44bd32;
    --color-success-400: #44bd32;

    --color-info-100: #40739e;
    --color-info-200: #40739e;
    --color-info-300: #40739e;

    --color-warning-100: #ff793f;
    --color-warning-200: #ff793f;
    --color-warning-300: #ff793f;

    --color-danger-100: #e84118;
    --color-danger-200: #e84118;
    --color-danger-300: #e84118;
    --color-danger-400: #e84118;

    /* Font */
    --font-heading: sans-serif;
    --font-body: serif;

    /* Font Size */
    --font-size-xxs: clamp(5px, 0.625rem, 20px); /* 10px */
    --font-size-xs: clamp(6px, 0.75rem, 24px); /* 12px */
    --font-size-sm: clamp(7px, 0.875rem, 28px); /* 14px */
    --font-size-md: clamp(8px, 1rem, 32px); /* 16px */
    --font-size-lg: clamp(12px, 1.75rem, 48px); /* 24px */
    --font-size-xl: clamp(22px, 2.5rem, 80px); /* 40px */
    --font-size-xxl: clamp(22px, 2.75rem, 88px); /* 44px */
    --font-size-xxxl: clamp(28px, 3.5rem, 112px); /* 56px */
    --font-size-display: clamp(40px, 5rem, 160px); /* 96px */

    /* Line Height */
    --line-height-heading: 1.2;
    --line-height-body: 1.5;

    /* Letter Spacing */

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-semibold: 500;
    --font-weight-bold: 700;

    /* Low Density Space */
    --space-2xs: 8px;
    --space-xs: 12px;
    --space-s: 16px;
    --space-m: 24px;
    --space-l: 32px;
    --space-xl: 48px; /* 64px; */
    --space-2xl: 64px; /* 192px; */

    /* 
      High Density Space 
      --space-2xs: 4px;
      --space-xs: 8px;
      --space-s: 12px;
      --space-m: 16px;
      --space-l: 24px;
      --space-xl: 32px;
      --space-2xl: 64px; 
    */

    /* Border Radius */
    --radius: 5px;
    --radius-lg: 12px;
    --radius-pill: 9999px;
    --radius-circle: 50%;

    /* Box Shadow */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --shadow-lg: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    /* Z Index */
    --z-dialog: 1;
    --z-popover: 1;
    --z-tooltip: 1;
    --z-drawer: 1;

    /* Outline Styles */

    /* Animation */

    /* Breakpoints */
    --bp-phone: 20em;
    --bp-tablet-portrait: 38em;
    --bp-tablet-landscape: 56em;
    --bp-desktop: 75em;
    --bp-lg-desktop: 112em;
  }
`;
