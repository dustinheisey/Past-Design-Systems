import {
  simple404,
  splitWithImage404,
  bgImage404,
} from "../regions/404/404.js";
import {
  textGridBlog,
  cardGridBlog,
  imgGridBlog,
  stackBlog,
  leftBlog,
  featuredTextGridBlog,
  featuredMixedGridBlog,
  featuredCardGridBlog,
} from "../regions/blog/blog.js";
import {
  centeredContact,
  splitLeftContact,
  splitRightContact,
} from "../regions/contact/contact.js";
import { contentContent } from "../regions/content/content.js";
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
} from "../regions/cta/cta.js";
import {
  offsetFaq,
  accordionFaq,
  inlineFaq,
  blurbGrid2Faq,
  blurbGrid3Faq,
  cardGrid2Faq,
  cardGrid3Faq,
} from "../regions/faq/faq.js";
import {
  leftImageInfo,
  rightImageInfo,
  cardGridInfo,
  blurbGridInfo,
  offsetGridInfo,
  offsetListInfo,
  listInfo,
} from "../regions/info/info.js";
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
} from "../regions/footer/footer.js";
import {
  leftHeader,
  rightHeader,
  leftImageHeader,
  rightImageHeader,
  centerHeader,
  leftInverseHeader,
  rightInverseHeader,
  leftImageInverseHeader,
  rightImageInverseHeader,
  centerInverseHeader,
} from "../regions/header/header.js";
import {
  leftHero,
  rightHero,
  splitLeftHero,
  splitRightHero,
  angledTopLeftHero,
  angledTopRightHero,
  angledBottomLeftHero,
  angledBottomRightHero,
  tiles2LeftHero,
  tiles2RightHero,
  tiles3LeftHero,
  tiles3RightHero,
  centerImageHero,
  leftBgHero,
  centerBgHero,
  rightBgHero,
  leftGradientHero,
  centerGradientHero,
  rightGradientHero,
} from "../regions/hero/hero.js";
import {
  gridLogoCloud,
  simpleLogoCloud,
  splitLogoCloud,
} from "../regions/logo-clouds/logo-clouds.js";
import {
  centeredNavbar,
  spacedNavbar,
  startNavbar,
  endNavbar,
  stackedNavbar,
} from "../regions/navbar/navbar.js";
import {
  leftImagePortfolio,
  rightImagePortfolio,
  cardGrid2Portfolio,
  coverPortfolio,
} from "../regions/portfolio/portfolio.js";
import {
  simple3Stats,
  simple4Stats,
  imageLeftStats,
  imageRightStats,
  splitLeftStats,
  splitRightStats,
  descriptionStats,
} from "../regions/stats/stats.js";
import {
  simpleQuoteTestimonials,
  centeredQuoteTestimonials,
  leftAvatarTestimonials,
  rightAvatarTestimonials,
} from "../regions/testimonials/testimonials.js";
import {
  inlineStartTimeline,
  inlineStaggeredTimeline,
  blockStartTimeline,
  blockStaggeredTimeline,
} from "../regions/timeline/timeline.js";

export const error = ["simple404", "splitWithImage404", "bgImage404"];
export const blog = [
  "textGridBlog",
  "cardGridBlog",
  "imgGridBlog",
  "stackBlog",
  "leftBlog",
  "FeaturedTextGridBlog",
  "FeaturedMixedGridBlog",
  "FeaturedCardGridBlog",
];
export const contact = [
  "centeredContact",
  "splitLeftContact",
  "splitRightContact",
];
export const content = ["contentContent"];
export const cta = [
  "simpleCta",
  "simpleLeftCta",
  "simpleRightCta",
  "leftImageCta",
  "rightImageCta",
  "splitLeftCta",
  "splitRightCta",
  "tiles2LeftCta",
  "tiles2RightCta",
  "tiles3LeftCta",
  "tiles3RightCta",
  "leftBgCta",
  "centerBgCta",
  "rightBgCta",
  "leftGradientCta",
  "centerGradientCta",
  "rightGradientCta",
  "justifiedCta",
  "simpleNewsletterCta",
  "simpleLeftNewsletterCta",
  "simpleRightNewsletterCta",
  "leftImageNewsletterCta",
  "rightImageNewsletterCta",
  "splitLeftNewsletterCta",
  "splitRightNewsletterCta",
  "tiles2LeftNewsletterCta",
  "tiles2RightNewsletterCta",
  "tiles3LeftNewsletterCta",
  "tiles3RightNewsletterCta",
  "leftBgNewsletterCta",
  "centerBgNewsletterCta",
  "rightBgNewsletterCta",
  "leftGradientNewsletterCta",
  "centerGradientNewsletterCta",
  "rightGradientNewsletterCta",
  "justifiedNewsletterCta",
];
export const faq = [
  "offsetFaq",
  "accordionFaq",
  "inlineFaq",
  "blurbGrid2Faq",
  "blurbGrid3Faq",
  "cardGrid2Faq",
  "cardGrid3Faq",
];
export const info = [
  "leftImageInfo",
  "rightImageInfo",
  "cardGridInfo",
  "blurbGridInfo",
  "offsetGridInfo",
  "offsetListInfo",
  "listInfo",
];
export const footer = [
  "missionFooter",
  "missionDarkFooter",
  "missionPrimaryFooter",
  "missionBgFooter",
  "missionDarkBgFooter",
  "missionPrimaryBgFooter",
  "newsletterFooter",
  "newsletterDarkFooter",
  "newsletterPrimaryFooter",
  "newsletterBgFooter",
  "newsletterDarkBgFooter",
  "newsletterPrimaryBgFooter",
  "simpleFooter",
  "simpleDarkFooter",
  "simplePrimaryFooter",
  "simpleBgFooter",
  "simpleDarkBgFooter",
  "simplePrimaryBgFooter",
  "inlineFooter",
  "inlineDarkFooter",
  "inlinePrimaryFooter",
];
export const header = [
  "leftHeader",
  "rightHeader",
  "leftImageHeader",
  "rightImageHeader",
  "centerHeader",
  "leftInverseHeader",
  "rightInverseHeader",
  "leftImageInverseHeader",
  "rightImageInverseHeader",
  "centerInverseHeader",
];
export const hero = [
  "leftHero",
  "rightHero",
  "splitLeftHero",
  "splitRightHero",
  "angledTopLeftHero",
  "angledTopRightHero",
  "angledBottomLeftHero",
  "angledBottomRightHero",
  "tiles2LeftHero",
  "tiles2RightHero",
  "tiles3LeftHero",
  "tiles3RightHero",
  "centerImageHero",
  "leftBgHero",
  "centerBgHero",
  "rightBgHero",
  "leftGradientHero",
  "centerGradientHero",
  "rightGradientHero",
];
export const logoCloud = ["gridLogoCloud", "simpleLogoCloud", "splitLogoCloud"];
export const navbar = [
  "centeredNavbar",
  "spacedNavbar",
  "startNavbar",
  "endNavbar",
  "stackedNavbar",
];
export const portfolio = [
  "leftImagePortfolio",
  "rightImagePortfolio",
  "cardGrid2Portfolio",
  "coverPortfolio",
];
export const stats = [
  "simple3Stats",
  "simple4Stats",
  "imageLeftStats",
  "imageRightStats",
  "splitLeftStats",
  "splitRightStats",
  "descriptionStats",
];
export const testimonial = [
  "simpleQuoteTestimonials",
  "centeredQuoteTestimonials",
  "leftAvatarTestimonials",
  "rightAvatarTestimonials",
];
export const timeline = [
  "inlineStartTimeline",
  "inlineStaggeredTimeline",
  "blockStartTimeline",
  "blockStaggeredTimeline",
];

export const process = [];
export const pricing = [];

export function computeLayout(layout) {
  switch (layout) {
    case "simple404":
      return simple404;
    case "splitWithImage404":
      return splitWithImage404;
    case "bgImage404":
      return bgImage404;
    case "textGridBlog":
      return textGridBlog;
    case "cardGridBlog":
      return cardGridBlog;
    case "imgGridBlog":
      return imgGridBlog;
    case "stackBlog":
      return stackBlog;
    case "leftBlog":
      return leftBlog;
    case "featuredTextGridBlog":
      return featuredTextGridBlog;
    case "featuredMixedGridBlog":
      return featuredMixedGridBlog;
    case "featuredCardGridBlog":
      return featuredCardGridBlog;
    case "centeredContact":
      return centeredContact;
    case "splitLeftContact":
      return splitLeftContact;
    case "splitRightContact":
      return splitRightContact;
    case "contentContent":
      return contentContent;
    case "simpleCta":
      return simpleCta;
    case "simpleLeftCta":
      return simpleLeftCta;
    case "simpleRightCta":
      return simpleRightCta;
    case "leftImageCta":
      return leftImageCta;
    case "rightImageCta":
      return rightImageCta;
    case "splitLeftCta":
      return splitLeftCta;
    case "splitRightCta":
      return splitRightCta;
    case "tiles2LeftCta":
      return tiles2LeftCta;
    case "tiles2RightCta":
      return tiles2RightCta;
    case "tiles3LeftCta":
      return tiles3LeftCta;
    case "tiles3RightCta":
      return tiles3RightCta;
    case "leftBgCta":
      return leftBgCta;
    case "centerBgCta":
      return centerBgCta;
    case "rightBgCta":
      return rightBgCta;
    case "leftGradientCta":
      return leftGradientCta;
    case "centerGradientCta":
      return centerGradientCta;
    case "rightGradientCta":
      return rightGradientCta;
    case "justifiedCta":
      return justifiedCta;
    case "simpleNewsletterCta":
      return simpleNewsletterCta;
    case "simpleLeftNewsletterCta":
      return simpleLeftNewsletterCta;
    case "simpleRightNewsletterCta":
      return simpleRightNewsletterCta;
    case "leftImageNewsletterCta":
      return leftImageNewsletterCta;
    case "rightImageNewsletterCta":
      return rightImageNewsletterCta;
    case "splitLeftNewsletterCta":
      return splitLeftNewsletterCta;
    case "splitRightNewsletterCta":
      return splitRightNewsletterCta;
    case "tiles2LeftNewsletterCta":
      return tiles2LeftNewsletterCta;
    case "tiles2RightNewsletterCta":
      return tiles2RightNewsletterCta;
    case "tiles3LeftNewsletterCta":
      return tiles3LeftNewsletterCta;
    case "tiles3RightNewsletterCta":
      return tiles3RightNewsletterCta;
    case "leftBgNewsletterCta":
      return leftBgNewsletterCta;
    case "centerBgNewsletterCta":
      return centerBgNewsletterCta;
    case "rightBgNewsletterCta":
      return rightBgNewsletterCta;
    case "leftGradientNewsletterCta":
      return leftGradientNewsletterCta;
    case "centerGradientNewsletterCta":
      return centerGradientNewsletterCta;
    case "rightGradientNewsletterCta":
      return rightGradientNewsletterCta;
    case "justifiedNewsletterCta":
      return justifiedNewsletterCta;
    case "offsetFaq":
      return offsetFaq;
    case "accordionFaq":
      return accordionFaq;
    case "inlineFaq":
      return inlineFaq;
    case "blurbGrid2Faq":
      return blurbGrid2Faq;
    case "blurbGrid3Faq":
      return blurbGrid3Faq;
    case "cardGrid2Faq":
      return cardGrid2Faq;
    case "cardGrid3Faq":
      return cardGrid3Faq;
    case "leftImageInfo":
      return leftImageInfo;
    case "rightImageInfo":
      return rightImageInfo;
    case "cardGridInfo":
      return cardGridInfo;
    case "blurbGridInfo":
      return blurbGridInfo;
    case "offsetGridInfo":
      return offsetGridInfo;
    case "offsetListInfo":
      return offsetListInfo;
    case "listInfo":
      return listInfo;
    case "missionFooter":
      return missionFooter;
    case "missionDarkFooter":
      return missionDarkFooter;
    case "missionPrimaryFooter":
      return missionPrimaryFooter;
    case "missionBgFooter":
      return missionBgFooter;
    case "missionDarkBgFooter":
      return missionDarkBgFooter;
    case "missionPrimaryBgFooter":
      return missionPrimaryBgFooter;
    case "newsletterFooter":
      return newsletterFooter;
    case "newsletterDarkFooter":
      return newsletterDarkFooter;
    case "newsletterPrimaryFooter":
      return newsletterPrimaryFooter;
    case "newsletterBgFooter":
      return newsletterBgFooter;
    case "newsletterDarkBgFooter":
      return newsletterDarkBgFooter;
    case "newsletterPrimaryBgFooter":
      return newsletterPrimaryBgFooter;
    case "simpleFooter":
      return simpleFooter;
    case "simpleDarkFooter":
      return simpleDarkFooter;
    case "simplePrimaryFooter":
      return simplePrimaryFooter;
    case "simpleBgFooter":
      return simpleBgFooter;
    case "simpleDarkBgFooter":
      return simpleDarkBgFooter;
    case "simplePrimaryBgFooter":
      return simplePrimaryBgFooter;
    case "inlineFooter":
      return inlineFooter;
    case "inlineDarkFooter":
      return inlineDarkFooter;
    case "inlinePrimaryFooter":
      return inlinePrimaryFooter;
    case "leftHeader":
      return leftHeader;
    case "rightHeader":
      return rightHeader;
    case "leftImageHeader":
      return leftImageHeader;
    case "rightImageHeader":
      return rightImageHeader;
    case "centerHeader":
      return centerHeader;
    case "leftInverseHeader":
      return leftInverseHeader;
    case "rightInverseHeader":
      return rightInverseHeader;
    case "leftImageInverseHeader":
      return leftImageInverseHeader;
    case "rightImageInverseHeader":
      return rightImageInverseHeader;
    case "centerInverseHeader":
      return centerInverseHeader;
    case "leftHero":
      return leftHero;
    case "rightHero":
      return rightHero;
    case "splitLeftHero":
      return splitLeftHero;
    case "splitRightHero":
      return splitRightHero;
    case "angledTopLeftHero":
      return angledTopLeftHero;
    case "angledTopRightHero":
      return angledTopRightHero;
    case "angledBottomLeftHero":
      return angledBottomLeftHero;
    case "angledBottomRightHero":
      return angledBottomRightHero;
    case "tiles2LeftHero":
      return tiles2LeftHero;
    case "tiles2RightHero":
      return tiles2RightHero;
    case "tiles3LeftHero":
      return tiles3LeftHero;
    case "tiles3RightHero":
      return tiles3RightHero;
    case "centerImageHero":
      return centerImageHero;
    case "leftBgHero":
      return leftBgHero;
    case "centerBgHero":
      return centerBgHero;
    case "rightBgHero":
      return rightBgHero;
    case "leftGradientHero":
      return leftGradientHero;
    case "centerGradientHero":
      return centerGradientHero;
    case "rightGradientHero":
      return rightGradientHero;
    case "gridLogoCloud":
      return gridLogoCloud;
    case "simpleLogoCloud":
      return simpleLogoCloud;
    case "splitLogoCloud":
      return splitLogoCloud;
    case "centeredNavbar":
      return centeredNavbar;
    case "spacedNavbar":
      return spacedNavbar;
    case "startNavbar":
      return startNavbar;
    case "endNavbar":
      return endNavbar;
    case "stackedNavbar":
      return stackedNavbar;
    case "leftImagePortfolio":
      return leftImagePortfolio;
    case "rightImagePortfolio":
      return rightImagePortfolio;
    case "cardGrid2Portfolio":
      return cardGrid2Portfolio;
    case "coverPortfolio":
      return coverPortfolio;
    case "simple3Stats":
      return simple3Stats;
    case "simple4Stats":
      return simple4Stats;
    case "imageLeftStats":
      return imageLeftStats;
    case "imageRightStats":
      return imageRightStats;
    case "splitLeftStats":
      return splitLeftStats;
    case "splitRightStats":
      return splitRightStats;
    case "descriptionStats":
      return descriptionStats;
    case "simpleQuoteTestimonials":
      return simpleQuoteTestimonials;
    case "centeredQuoteTestimonials":
      return centeredQuoteTestimonials;
    case "leftAvatarTestimonials":
      return leftAvatarTestimonials;
    case "rightAvatarTestimonials":
      return rightAvatarTestimonials;
    case "inlineStartTimeline":
      return inlineStartTimeline;
    case "inlineStaggeredTimeline":
      return inlineStaggeredTimeline;
    case "blockStartTimeline":
      return blockStartTimeline;
    case "blockStaggeredTimeline":
      return blockStaggeredTimeline;
    default:
      return null;
  }
}
