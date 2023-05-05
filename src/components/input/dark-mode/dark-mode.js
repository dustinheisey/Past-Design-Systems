import { LitElement, html, css } from "lit";

const storageKey = "theme-preference";

class DarkModeToggle extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--color-primary);
        --size: 24px;
        --icon-fill: var(--color-primary);
        --ease-1: cubic-bezier(0.25, 0, 0.5, 1);
        --ease-2: cubic-bezier(0.25, 0, 0.4, 1);
        --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
        --ease-4: cubic-bezier(0.25, 0, 0.2, 1);
        --ease-5: cubic-bezier(0.25, 0, 0.1, 1);

        --ease-in-1: cubic-bezier(0.25, 0, 1, 1);
        --ease-in-2: cubic-bezier(0.5, 0, 1, 1);
        --ease-in-3: cubic-bezier(0.7, 0, 1, 1);
        --ease-in-4: cubic-bezier(0.9, 0, 1, 1);
        --ease-in-5: cubic-bezier(1, 0, 1, 1);

        --ease-out-1: cubic-bezier(0, 0, 0.75, 1);
        --ease-out-2: cubic-bezier(0, 0, 0.5, 1);
        --ease-out-3: cubic-bezier(0, 0, 0.3, 1);
        --ease-out-4: cubic-bezier(0, 0, 0.1, 1);
        --ease-out-5: cubic-bezier(0, 0, 0, 1);

        --ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
        --ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
        --ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
        --ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
        --ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);

        --ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
        --ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
        --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
        --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
        --ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);

        --ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
        --ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
        --ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
        --ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
        --ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);

        --ease-step-1: steps(2);
        --ease-step-2: steps(3);
        --ease-step-3: steps(4);
        --ease-step-4: steps(7);
        --ease-step-5: steps(10);
      }

      @media (prefers-reduced-motion: no-preference) {
        .sun-and-moon > .sun {
          transition: transform 0.5s var(--ease-elastic-3);
        }

        .sun-and-moon > .sun-beams {
          transition: transform 0.5s var(--ease-elastic-4),
            opacity 0.5s var(--ease-3);
        }

        .sun-and-moon > .moon > circle {
          transform: translateX(-7px);
          transition: transform 0.25s var(--ease-out-5);
        }

        [data-theme="dark"] .sun-and-moon > .sun {
          transform: scale(1.75);
          transition-timing-function: var(--ease-3);
          transition-duration: 0.25s;
        }

        [data-theme="dark"] .sun-and-moon > .sun-beams {
          transform: rotateZ(-25deg);
          transition-duration: 0.15s;
        }

        [data-theme="dark"] .sun-and-moon > .moon > circle {
          transition-delay: 0.25s;
          transition-duration: 0.5s;
        }
      }

      .dark-mode-toggle {
        background: none;
        border: none;
        padding: 0;

        inline-size: var(--size);
        block-size: var(--size);
        aspect-ratio: 1;
        border-radius: 50%;

        cursor: pointer;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        outline-offset: 5px;
      }

      .dark-mode-toggle > svg {
        inline-size: 100%;
        block-size: 100%;
        stroke-linecap: round;
      }

      .sun-and-moon > .sun,
      .sun-and-moon > .moon,
      .sun-and-moon > .sun-beams {
        transform-origin: center center;
      }

      .sun-and-moon > .moon circle {
        transform: translateX(7px);
      }

      [data-theme="dark"] .sun-and-moon > .moon circle {
        transform: translateX(-7px);
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        transform: scale(1.75);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        opacity: 0;
      }

      .dark-mode-toggle > .sun-and-moon > .sun {
        fill: var(--icon-fill);
      }

      .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
        fill: var(--icon-fill);
      }

      .dark-mode-toggle:is(:hover, :focus-visible)
        > .sun-and-moon
        > .sun-beams {
        stroke: var(--icon-fill);
      }

      [data-theme="dark"] .dark-mode-toggle > .sun-and-moon > .sun {
        fill: var(--icon-fill);
      }

      [data-theme="dark"]
        .dark-mode-toggle:is(:hover, :focus-visible)
        > .sun-and-moon
        > .sun {
        fill: var(--icon-fill);
      }

      [data-theme="dark"] .dark-mode-toggle > .sun-and-moon > .sun-beams {
        stroke: var(--icon-fill);
      }

      [data-theme="dark"]
        .dark-mode-toggle:is(:hover, :focus-visible)
        > .sun-and-moon
        > .sun-beams {
        stroke: var(--icon-fill);
      }

      @media (hover: none) {
        .dark-mode-toggle {
          --size: 48px;
        }
      }
    `;
  }

  static get properties() {
    return {
      theme: { type: String },
    };
  }

  constructor() {
    super();
    this.theme = this.getColorPreference();
    // this.reflectPreference();
  }

  getColorPreference() {
    if (localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey);
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }

  setPreference() {
    localStorage.setItem(storageKey, this.theme);
    this.reflectPreference();
  }

  reflectPreference() {
    document.firstElementChild.setAttribute("data-theme", this.theme);
    const button = this.shadowRoot.querySelector("#theme-toggle");
    button.setAttribute("aria-label", this.theme);
    button.setAttribute("data-theme", this.theme);
  }

  onClick() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.setPreference();
  }

  connectedCallback() {
    super.connectedCallback();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches: isDark }) => {
        this.theme = isDark ? "dark" : "light";
        this.setPreference();
      });
  }

  render() {
    return html`
      <button
        class="dark-mode-toggle"
        id="theme-toggle"
        title="Toggles light & dark"
        @click=${this.onClick}
        aria-live="polite"
      >
        <svg
          class="sun-and-moon"
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <circle
            class="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="var(--color-primary)"
          />
          <g class="sun-beams" stroke="var(--color-primary)">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" height="100%" width="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
        </svg>
      </button>
    `;
  }
}

customElements.define("nds-dark-mode", DarkModeToggle);
