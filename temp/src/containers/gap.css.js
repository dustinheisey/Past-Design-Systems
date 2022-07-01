import { css } from 'lit-element';
import { bp } from '@utils';

export const gap = css`
  [gap~='2xs'] {
    --gap: var(--space-2xs);
  }

  [gap~='xs'] {
    --gap: var(--space-xs);
  }

  [gap~='s'] {
    --gap: var(--space-s);
  }

  [gap~='m'] {
    --gap: var(--space-m);
  }

  [gap~='l'] {
    --gap: var(--space-l);
  }

  [gap~='xl'] {
    --gap: var(--space-xl);
  }

  [gap~='2xl'] {
    --gap: var(--space-2xl);
  }

  ${bp(
    'phone',
    css`
      [gap~='phone:2xs'] {
        --gap: var(--space-2xs);
      }

      [gap~='phone:xs'] {
        --gap: var(--space-xs);
      }

      [gap~='phone:s'] {
        --gap: var(--space-s);
      }

      [gap~='phone:m'] {
        --gap: var(--space-m);
      }

      [gap~='phone:l'] {
        --gap: var(--space-l);
      }

      [gap~='phone:xl'] {
        --gap: var(--space-xl);
      }

      [gap~='phone:2xl'] {
        --gap: var(--space-2xl);
      }
    `
  )}

  ${bp(
    'tablet-portrait',
    css`
      [gap~='tablet-portrait:2xs'] {
        --gap: var(--space-2xs);
      }

      [gap~='tablet-portrait:xs'] {
        --gap: var(--space-xs);
      }

      [gap~='tablet-portrait:s'] {
        --gap: var(--space-s);
      }

      [gap~='tablet-portrait:m'] {
        --gap: var(--space-m);
      }

      [gap~='tablet-portrait:l'] {
        --gap: var(--space-l);
      }

      [gap~='tablet-portrait:xl'] {
        --gap: var(--space-xl);
      }

      [gap~='tablet-portrait:2xl'] {
        --gap: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'tablet-landscape',
    css`
      [gap~='tablet-landscape:2xs'] {
        --gap: var(--space-2xs);
      }

      [gap~='tablet-landscape:xs'] {
        --gap: var(--space-xs);
      }

      [gap~='tablet-landscape:s'] {
        --gap: var(--space-s);
      }

      [gap~='tablet-landscape:m'] {
        --gap: var(--space-m);
      }

      [gap~='tablet-landscape:l'] {
        --gap: var(--space-l);
      }

      [gap~='tablet-landscape:xl'] {
        --gap: var(--space-xl);
      }

      [gap~='tablet-landscape:2xl'] {
        --gap: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'desktop',
    css`
      [gap~='desktop:2xs'] {
        --gap: var(--space-2xs);
      }

      [gap~='desktop:xs'] {
        --gap: var(--space-xs);
      }

      [gap~='desktop:s'] {
        --gap: var(--space-s);
      }

      [gap~='desktop:m'] {
        --gap: var(--space-m);
      }

      [gap~='desktop:l'] {
        --gap: var(--space-l);
      }

      [gap~='desktop:xl'] {
        --gap: var(--space-xl);
      }

      [gap~='desktop:2xl'] {
        --gap: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'lg-desktop',
    css`
      [gap~='lg-desktop:2xs'] {
        --gap: var(--space-2xs);
      }

      [gap~='lg-desktop:xs'] {
        --gap: var(--space-xs);
      }

      [gap~='lg-desktop:s'] {
        --gap: var(--space-s);
      }

      [gap~='lg-desktop:m'] {
        --gap: var(--space-m);
      }

      [gap~='lg-desktop:l'] {
        --gap: var(--space-l);
      }

      [gap~='lg-desktop:xl'] {
        --gap: var(--space-xl);
      }

      [gap~='lg-desktop:2xl'] {
        --gap: var(--space-2xl);
      }
    `
  )}
`;
