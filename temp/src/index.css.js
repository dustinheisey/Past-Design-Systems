import { css } from 'lit-element';

import { customProperties } from './custom-properties.css.js';
import { reset } from './reset.css.js';

import { inset } from './containers/inset.css.js';
import { gap } from './containers/gap.css.js';

import { center } from './containers/center/center.css.js';
import { cover } from './containers/cover/cover.css.js';
import { grid } from './containers/grid/grid.css.js';
import { inline } from './containers/inline/inline.css.js';
import { masonry } from './containers/masonry/masonry.css.js';
import { mixed } from './containers/mixed/mixed.css.js';
import { positioned } from './containers/positioned/positioned.css.js';
import { reel } from './containers/reel/reel.css.js';
import { sidebar } from './containers/sidebar/sidebar.css.js';
import { stack } from './containers/stack/stack.css.js';
import { switcher } from './containers/switcher/switcher.css.js';

import { button } from './elements/button/button.css.js';

export const global = css`
  ${customProperties}
  ${reset}

  /* Containers */
  ${inset}
  ${gap}

  ${center}
  ${cover} 
  ${grid} 
  ${inline} 
  ${masonry} 
  ${mixed} 
  ${positioned} 
  ${reel} 
  ${sidebar} 
  ${stack} 
  ${switcher}
  

  /* Elements */
  ${button}
`;
