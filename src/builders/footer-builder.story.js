import { computeLayout } from "./computeLayout.js";

export default {
  title: "Builders/Footer Builder",
  argTypes: {
    footer: {
      control: "select",
      options: [
        "mission",
        "missionDark",
        "missionPrimary",
        "missionBg",
        "missionDarkBg",
        "missionPrimaryBg",
        "newsletter",
        "newsletterDark",
        "newsletterPrimary",
        "newsletterBg",
        "newsletterDarkBg",
        "newsletterPrimaryBg",
        "simple",
        "simpleDark",
        "simplePrimary",
        "simpleBg",
        "simpleDarkBg",
        "simplePrimaryBg",
        "inline",
        "inlineDark",
        "inlinePrimary",
      ],
    },
  },
  args: {
    footer: "inlinePrimary",
  },
};

export const Footer = ({ footer }) => computeLayout("footer", footer);
