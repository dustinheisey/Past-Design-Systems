import { html } from "lit";
import "../../input/nds-dark-mode/nds-dark-mode.js";

function computeLayout(layout) {
  switch (layout) {
    case "start":
      return "cluster justify-start gap-m";
    case "end":
      return "cluster justify-end gap-m";
    case "center":
      return "stack justify-center gap-m";
    case "spaced":
      return "cluster justify-between gap-m";
    default:
      return "cluster gap-m";
  }
}

export const navbar = (
  config = {
    layout: "start",
    logo: { src: "./logo.svg", alt: "logo" },
    cta: { href: "/start-a-project", text: "Start a Project" },
    links: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      {
        href: "/services",
        text: "Services",
        sub: [
          { href: "/branding", text: "Branding" },
          { href: "/web-design", text: "Web Design" },
          { href: "/optimization", text: "Optimization" },
          { href: "/maintenance", text: "Maintenance" },
        ],
      },
      { href: "/portfolio", text: "Portfolio" },
    ],
  }
) => html`
  <nav class="${computeLayout()} full">
    <a href="/">
      <img src="${config.logo.src}" alt="${config.logo.alt}" />
    </a>
    <ul class="cluster gap-m">
      ${config.links.map(
        (link) => html`
          <li>
            ${link.sub
              ? html`
                  <drop-down>
                    <a href="${link.href}" class="link link-navigation"
                      >${link.text}</a
                    >
                    <ul>
                      ${link.sub.map(
                        (subLink) => html`
                          <li>
                            <a
                              href="${subLink.href}"
                              class="link link-navigation"
                              >${subLink.text}</a
                            >
                          </li>
                        `
                      )}
                    </ul>
                  </drop-down>
                `
              : html`<a href="${link.href}" class="link link-navigation"
                  >${link.text}</a
                >`}
          </li>
        `
      )}
    </ul>
    <div class="cluster gap-xs">
      <nds-dark-mode></nds-dark-mode>
      <a href="${config.cta.href}" class="btn btn-primary">
        ${config.cta.text}
      </a>
    </div>
  </nav>
`;
