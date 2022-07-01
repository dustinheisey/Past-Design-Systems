import { css } from 'lit-element';
import { bp } from '@utils';

export const space = css`
  [space~='2xs'] {
    --space: var(--space-2xs);
  }

  [space~='xs'] {
    --space: var(--space-xs);
  }

  [space~='s'] {
    --space: var(--space-s);
  }

  [space~='m'] {
    --space: var(--space-m);
  }

  [space~='l'] {
    --space: var(--space-l);
  }

  [space~='xl'] {
    --space: var(--space-xl);
  }

  [space~='2xl'] {
    --space: var(--space-2xl);
  }

  ${bp(
    'phone',
    css`
      [space~='phone:2xs'] {
        --space: var(--space-2xs);
      }

      [space~='phone:xs'] {
        --space: var(--space-xs);
      }

      [space~='phone:s'] {
        --space: var(--space-s);
      }

      [space~='phone:m'] {
        --space: var(--space-m);
      }

      [space~='phone:l'] {
        --space: var(--space-l);
      }

      [space~='phone:xl'] {
        --space: var(--space-xl);
      }

      [space~='phone:2xl'] {
        --space: var(--space-2xl);
      }
    `
  )}

  ${bp(
    'tablet-portrait',
    css`
      [space~='tablet-portrait:2xs'] {
        --space: var(--space-2xs);
      }

      [space~='tablet-portrait:xs'] {
        --space: var(--space-xs);
      }

      [space~='tablet-portrait:s'] {
        --space: var(--space-s);
      }

      [space~='tablet-portrait:m'] {
        --space: var(--space-m);
      }

      [space~='tablet-portrait:l'] {
        --space: var(--space-l);
      }

      [space~='tablet-portrait:xl'] {
        --space: var(--space-xl);
      }

      [space~='tablet-portrait:2xl'] {
        --space: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'tablet-landscape',
    css`
      [space~='tablet-landscape:2xs'] {
        --space: var(--space-2xs);
      }

      [space~='tablet-landscape:xs'] {
        --space: var(--space-xs);
      }

      [space~='tablet-landscape:s'] {
        --space: var(--space-s);
      }

      [space~='tablet-landscape:m'] {
        --space: var(--space-m);
      }

      [space~='tablet-landscape:l'] {
        --space: var(--space-l);
      }

      [space~='tablet-landscape:xl'] {
        --space: var(--space-xl);
      }

      [space~='tablet-landscape:2xl'] {
        --space: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'desktop',
    css`
      [space~='desktop:2xs'] {
        --space: var(--space-2xs);
      }

      [space~='desktop:xs'] {
        --space: var(--space-xs);
      }

      [space~='desktop:s'] {
        --space: var(--space-s);
      }

      [space~='desktop:m'] {
        --space: var(--space-m);
      }

      [space~='desktop:l'] {
        --space: var(--space-l);
      }

      [space~='desktop:xl'] {
        --space: var(--space-xl);
      }

      [space~='desktop:2xl'] {
        --space: var(--space-2xl);
      }
    `
  )}

    ${bp(
    'lg-desktop',
    css`
      [space~='lg-desktop:2xs'] {
        --space: var(--space-2xs);
      }

      [space~='lg-desktop:xs'] {
        --space: var(--space-xs);
      }

      [space~='lg-desktop:s'] {
        --space: var(--space-s);
      }

      [space~='lg-desktop:m'] {
        --space: var(--space-m);
      }

      [space~='lg-desktop:l'] {
        --space: var(--space-l);
      }

      [space~='lg-desktop:xl'] {
        --space: var(--space-xl);
      }

      [space~='lg-desktop:2xl'] {
        --space: var(--space-2xl);
      }
    `
  )}
`;
