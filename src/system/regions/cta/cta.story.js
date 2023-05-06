import { html } from "lit";
import {
  simpleCta,
  simpleLeftCta,
  simpleRightCta,
  leftImageCta,
  rightImageCta,
  splitLeftCta,
  splitRightCta,
  tiles2LeftCta,
  tiles2RightCta,
  tiles3LeftCta,
  tiles3RightCta,
  leftBgCta,
  centerBgCta,
  rightBgCta,
  leftGradientCta,
  centerGradientCta,
  rightGradientCta,
  justifiedCta,
  simpleNewsletterCta,
  simpleLeftNewsletterCta,
  simpleRightNewsletterCta,
  leftImageNewsletterCta,
  rightImageNewsletterCta,
  splitLeftNewsletterCta,
  splitRightNewsletterCta,
  tiles2LeftNewsletterCta,
  tiles2RightNewsletterCta,
  tiles3LeftNewsletterCta,
  tiles3RightNewsletterCta,
  leftBgNewsletterCta,
  centerBgNewsletterCta,
  rightBgNewsletterCta,
  leftGradientNewsletterCta,
  centerGradientNewsletterCta,
  rightGradientNewsletterCta,
  justifiedNewsletterCta,
} from "./cta.js";

export default {
  title: "Design System/Regions/CTA",
  decorators: [
    (story) => html`<div style="inline-size: 90vw">${story()}</div>`,
  ],
};

export const Simple = () => simpleCta;
export const SimpleLeft = () => simpleLeftCta;
export const SimpleRight = () => simpleRightCta;
export const LeftImage = () => leftImageCta;
export const RightImage = () => rightImageCta;
export const SplitLeft = () => splitLeftCta;
export const SplitRight = () => splitRightCta;
export const Tiles2Left = () => tiles2LeftCta;
export const Tiles2Right = () => tiles2RightCta;
export const Tiles3Left = () => tiles3LeftCta;
export const Tiles3Right = () => tiles3RightCta;
export const LeftBg = () => leftBgCta;
export const CenterBg = () => centerBgCta;
export const RightBg = () => rightBgCta;
export const LeftGradient = () => leftGradientCta;
export const CenterGradient = () => centerGradientCta;
export const RightGradient = () => rightGradientCta;
export const Justified = () => justifiedCta;

export const SimpleNewsletter = () => simpleNewsletterCta;
export const SimpleLeftNewsletter = () => simpleLeftNewsletterCta;
export const SimpleRightNewsletter = () => simpleRightNewsletterCta;
export const LeftImageNewsletter = () => leftImageNewsletterCta;
export const RightImageNewsletter = () => rightImageNewsletterCta;
export const SplitLeftNewsletter = () => splitLeftNewsletterCta;
export const SplitRightNewsletter = () => splitRightNewsletterCta;
export const Tiles2LeftNewsletter = () => tiles2LeftNewsletterCta;
export const Tiles2RightNewsletter = () => tiles2RightNewsletterCta;
export const Tiles3LeftNewsletter = () => tiles3LeftNewsletterCta;
export const Tiles3RightNewsletter = () => tiles3RightNewsletterCta;
export const LeftBgNewsletter = () => leftBgNewsletterCta;
export const CenterBgNewsletter = () => centerBgNewsletterCta;
export const RightBgNewsletter = () => rightBgNewsletterCta;
export const LeftGradientNewsletter = () => leftGradientNewsletterCta;
export const CenterGradientNewsletter = () => centerGradientNewsletterCta;
export const RightGradientNewsletter = () => rightGradientNewsletterCta;
export const JustifiedNewsletter = () => justifiedNewsletterCta;
