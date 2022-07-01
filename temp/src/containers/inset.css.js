import { css } from 'lit-element';
import { bp } from '@utils';

export const inset = css`
  [inset~='2xs'] {
    --inset: var(--space-2xs);
  }

  [inset~='xs'] {
    --inset: var(--space-xs);
  }

  [inset~='s'] {
    --inset: var(--space-s);
  }

  [inset~='m'] {
    --inset: var(--space-m);
  }

  [inset~='l'] {
    --inset: var(--space-l);
  }

  [inset~='xl'] {
    --inset: var(--space-xl);
  }

  [inset~='2xl'] {
    --inset: var(--space-2xl);
  }

  ${bp(
    'phone',
    css`
      [inset~='phone:2xs'] {
        --inset: var(--space-2xs);
      }

      [inset~='phone:xs'] {
        --inset: var(--space-xs);
      }

      [inset~='phone:s'] {
        --inset: var(--space-s);
      }

      [inset~='phone:m'] {
        --inset: var(--space-m);
      }

      [inset~='phone:l'] {
        --inset: var(--space-l);
      }

      [inset~='phone:xl'] {
        --inset: var(--space-xl);
      }

      [inset~='phone:2xl'] {
        --inset: var(--space-2xl);
      }
    `
  )}

  ${bp(
    'tablet-portrait',
    css`
      [inset~='tablet-portrait:2xs'] {
        --inset: var(--space-2xs);
      }

      [inset~='tablet-portrait:xs'] {
        --inset: var(--space-xs);
      }

      [inset~='tablet-portrait:s'] {
        --inset: var(--space-s);
      }

      [inset~='tablet-portrait:m'] {
        --inset: var(--space-m);
      }

      [inset~='tablet-portrait:l'] {
        --inset: var(--space-l);
      }

      [inset~='tablet-portrait:xl'] {
        --inset: var(--space-xl);
      }

      [inset~='tablet-portrait:2xl'] {
        --inset: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'tablet-landscape',
    css`
      [inset~='tablet-landscape:2xs'] {
        --inset: var(--space-2xs);
      }

      [inset~='tablet-landscape:xs'] {
        --inset: var(--space-xs);
      }

      [inset~='tablet-landscape:s'] {
        --inset: var(--space-s);
      }

      [inset~='tablet-landscape:m'] {
        --inset: var(--space-m);
      }

      [inset~='tablet-landscape:l'] {
        --inset: var(--space-l);
      }

      [inset~='tablet-landscape:xl'] {
        --inset: var(--space-xl);
      }

      [inset~='tablet-landscape:2xl'] {
        --inset: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'desktop',
    css`
      [inset~='desktop:2xs'] {
        --inset: var(--space-2xs);
      }

      [inset~='desktop:xs'] {
        --inset: var(--space-xs);
      }

      [inset~='desktop:s'] {
        --inset: var(--space-s);
      }

      [inset~='desktop:m'] {
        --inset: var(--space-m);
      }

      [inset~='desktop:l'] {
        --inset: var(--space-l);
      }

      [inset~='desktop:xl'] {
        --inset: var(--space-xl);
      }

      [inset~='desktop:2xl'] {
        --inset: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'lg-desktop',
    css`
      [inset~='lg-desktop:2xs'] {
        --inset: var(--space-2xs);
      }

      [inset~='lg-desktop:xs'] {
        --inset: var(--space-xs);
      }

      [inset~='lg-desktop:s'] {
        --inset: var(--space-s);
      }

      [inset~='lg-desktop:m'] {
        --inset: var(--space-m);
      }

      [inset~='lg-desktop:l'] {
        --inset: var(--space-l);
      }

      [inset~='lg-desktop:xl'] {
        --inset: var(--space-xl);
      }

      [inset~='lg-desktop:2xl'] {
        --inset: var(--space-2xl);
      }
    `
  )}
`;
