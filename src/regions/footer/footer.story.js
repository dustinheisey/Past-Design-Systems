import { html } from "lit";
import {
  missionFooter,
  missionDarkFooter,
  missionPrimaryFooter,
  missionBgFooter,
  missionDarkBgFooter,
  missionPrimaryBgFooter,
  newsletterFooter,
  newsletterDarkFooter,
  newsletterPrimaryFooter,
  newsletterBgFooter,
  newsletterDarkBgFooter,
  newsletterPrimaryBgFooter,
  simpleFooter,
  simpleDarkFooter,
  simplePrimaryFooter,
  simpleBgFooter,
  simpleDarkBgFooter,
  simplePrimaryBgFooter,
  inlineFooter,
  inlineDarkFooter,
  inlinePrimaryFooter,
} from "./footer.js";

export default {
  title: "Regions/Footer",
  decorators: [
    (story) => html`<div style="inline-size: 90vw">${story()}</div>`,
  ],
};

export const Mission = () => missionFooter;
export const MissionDark = () => missionDarkFooter;
export const MissionPrimary = () => missionPrimaryFooter;
export const MissionBg = () => missionBgFooter;
export const MissionDarkBg = () => missionDarkBgFooter;
export const MissionPrimaryBg = () => missionPrimaryBgFooter;
export const Newsletter = () => newsletterFooter;
export const NewsletterDark = () => newsletterDarkFooter;
export const NewsletterPrimary = () => newsletterPrimaryFooter;
export const NewsletterBg = () => newsletterBgFooter;
export const NewsletterDarkBg = () => newsletterDarkBgFooter;
export const NewsletterPrimaryBg = () => newsletterPrimaryBgFooter;
export const Simple = () => simpleFooter;
export const SimpleDark = () => simpleDarkFooter;
export const SimplePrimary = () => simplePrimaryFooter;
export const SimpleBg = () => simpleBgFooter;
export const SimpleDarkBg = () => simpleDarkBgFooter;
export const SimplePrimaryBg = () => simplePrimaryBgFooter;
export const Inline = () => inlineFooter;
export const InlineDark = () => inlineDarkFooter;
export const InlinePrimary = () => inlinePrimaryFooter;
