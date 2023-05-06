import { setCustomElementsManifest } from "@storybook/web-components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import customElements from "../custom-elements.json";
import "../src/system/style.css";

setCustomElementsManifest(customElements);

export default {
  parameters: {
    backgrounds: {
      disable: true,
    },
    darkMode: {
      darkClass: "mode-dark",
      lightClass: "mode-light",
      stylePreview: true,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
      storySort: {
        order: [
          "Builders",
          [
            "Navigation Builder",
            "Footer Builder",
            "Landing Builder",
            "About Builder",
            "Portfolio Builder",
            "Programs or Services Builder",
            "Program or Service Builder",
            "Testimonials or Impact Builder",
            "Contact Builder",
            "Blog Builder",
            "Blog Post Builder",
            "FAQ Builder",
            "Donate Builder",
            "News or Events Builder",
            "Partners Builder",
            "Get Involved Builder",
            "Resources Builder",
            "404 Builder",
            "Privacy Policy Builder",
            "Terms & Conditions Builder",
            "Page Builder",
          ],
          "Design System",
          ["Regions", "Components", "Layouts", "Elements", "Tokens"],
        ],
      },
    },
  },
};
