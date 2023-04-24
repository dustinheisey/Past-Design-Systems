import { LitElement, html } from 'lit';

class DDropdown extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`
            <div class="relative inline-block">
                <button
                    class="cursor-pointer rounded-btn bg-primary-500 px-s py-2xs text-sm font-body text-white"
                    aria-haspopup="true"
                    aria-expanded="${this.isOpen}"
                    @click="${this.toggleMenu}"
                >
                    Dropdown Label
                </button>
                <div
                    class="z-10 left-0 m-28 w-48 absolute rounded-card bg-gray-100 py-2xs shadow-lg outline-none"
                    role="menu"
                    aria-hidden="${!this.isOpen}"
                    @keydown="${this.handleKeyDown}"
                >
                    <a
                        href="/account-settings"
                        role="menuitem"
                        class="${this.isActive(0)
                            ? 'bg-gray-200'
                            : ''} block px-s py-2xs text-sm text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:text-gray-900 focus:outline-none"
                    >
                        Account settings
                    </a>
                    <a
                        href="/documentation"
                        role="menuitem"
                        class="${this.isActive(1)
                            ? 'bg-gray-200'
                            : ''} block px-s py-2xs text-sm text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:text-gray-900 focus:outline-none"
                    >
                        Documentation
                    </a>
                    <a
                        href="#"
                        class="block cursor-not-allowed px-s py-2xs text-sm text-gray-400"
                        role="menuitem"
                        aria-disabled="true"
                        tabindex="-1"
                    >
                        Invite a friend (coming soon!)
                    </a>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            isOpen: { type: Boolean },
            activeIndex: { type: Number },
        };
    }

    constructor() {
        super();
        this.isOpen = false;
        this.activeIndex = -1;
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusMenuItems();
        }
    }

    handleKeyDown(event) {
        if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
            event.preventDefault();
            this.moveFocus(event.code === 'ArrowDown' ? 1 : -1);
        } else if (event.code === 'Escape') {
            event.preventDefault();
            this.closeMenu();
        }
    }

    moveFocus(direction) {
        const menuItems = this.getMenuItems();
        const itemCount = menuItems.length;

        if (this.activeIndex === -1) {
            this.activeIndex = direction === 1 ? 0 : itemCount - 1;
        } else {
            this.activeIndex =
                (this.activeIndex + direction + itemCount) % itemCount;
        }

        menuItems[this.activeIndex].focus();
    }

    closeMenu() {
        this.isOpen = false;
        this.activeIndex = -1;
        this.focusMenuButton();
    }

    focusMenuButton() {
        this.shadowRoot.querySelector('.cursor-pointer').focus();
    }

    focusMenuItems() {
        const menuItems = this.getMenuItems();
        if (menuItems.length > 0) {
            this.activeIndex = 0;
            menuItems[0].focus();
        }
    }

    getMenuItems() {
        return Array.from(this.shadowRoot.querySelectorAll('.block'));
    }

    isActive(index) {
        return this.activeIndex === index;
    }
}

customElements.define('d-dropdown', DDropdown);
