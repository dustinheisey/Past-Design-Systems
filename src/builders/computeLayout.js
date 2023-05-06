import {
  simple404,
  splitWithImage404,
  bgImage404,
} from "../system/regions/404/404.js";
import {
  textGridBlog,
  cardGridBlog,
  imgGridBlog,
  stackBlog,
  leftBlog,
  featuredTextGridBlog,
  featuredMixedGridBlog,
  featuredCardGridBlog,
} from "../system/regions/blog/blog.js";
import {
  centeredContact,
  splitLeftContact,
  splitRightContact,
} from "../system/regions/contact/contact.js";
import { contentContent } from "../system/regions/content/content.js";
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
} from "../system/regions/cta/cta.js";
import {
  offsetFaq,
  accordionFaq,
  inlineFaq,
  blurbGrid2Faq,
  blurbGrid3Faq,
  cardGrid2Faq,
  cardGrid3Faq,
} from "../system/regions/faq/faq.js";
import {
  leftImageFeature,
  rightImageFeature,
  cardGridFeature,
  blurbGridFeature,
  offsetGridFeature,
  offsetListFeature,
  listFeature,
} from "../system/regions/feature/feature.js";
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
} from "../system/regions/footer/footer.js";
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
} from "../system/regions/header/header.js";
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
} from "../system/regions/hero/hero.js";
import {
  gridLogoCloud,
  simpleLogoCloud,
  splitLogoCloud,
} from "../system/regions/logo-clouds/logo-clouds.js";
import {
  centeredNavbar,
  spacedNavbar,
  startNavbar,
  endNavbar,
  stackedNavbar,
} from "../system/regions/navbar/navbar.js";
import {
  leftImagePortfolio,
  rightImagePortfolio,
  cardGrid2Portfolio,
  coverPortfolio,
} from "../system/regions/portfolio/portfolio.js";
import {
  simple3Stats,
  simple4Stats,
  imageLeftStats,
  imageRightStats,
  splitLeftStats,
  splitRightStats,
  descriptionStats,
} from "../system/regions/stats/stats.js";
import {
  simpleQuoteTestimonials,
  centeredQuoteTestimonials,
  leftAvatarTestimonials,
  rightAvatarTestimonials,
} from "../system/regions/testimonials/testimonials.js";
import {
  inlineStartTimeline,
  inlineStaggeredTimeline,
  blockStartTimeline,
  blockStaggeredTimeline,
} from "../system/regions/timeline/timeline.js";

export function computeLayout(type, layout) {
  console.log(type, layout);
  switch (type) {
    case "404":
      return compute404(layout);
    case "blog":
      return computeBlog(layout);
    case "contact":
      return computeContact(layout);
    case "content":
      return computeContent(layout);
    case "cta":
      return computeCta(layout);
    case "faq":
      return computeFaq(layout);
    case "feature":
      return computeFeature(layout);
    case "footer":
      return computeFooter(layout);
    case "header":
      return computeHeader(layout);
    case "hero":
      return computeHero(layout);
    case "logo-clouds":
      return computeLogoClouds(layout);
    case "navbar":
      return computeNavbar(layout);
    case "portfolio":
      return computePortfolio(layout);
    case "stats":
      return computeStats(layout);
    case "testimonials":
      return computeTestimonials(layout);
    case "timeline":
      return computeTimeline(layout);
    default:
      break;
  }
}

function compute404(layout) {
  switch (layout) {
    case "simple":
      return simple404;
    case "splitWithImage":
      return splitWithImage404;
    case "bgImage":
      return bgImage404;
    default:
      return simple404;
  }
}

function computeBlog(layout) {
  switch (layout) {
    case "textGrid":
      return textGridBlog;
    case "cardGrid":
      return cardGridBlog;
    case "imgGrid":
      return imgGridBlog;
    case "stack":
      return stackBlog;
    case "left":
      return leftBlog;
    case "featuredTextGrid":
      return featuredTextGridBlog;
    case "featuredMixedGrid":
      return featuredMixedGridBlog;
    case "featuredCardGrid":
      return featuredCardGridBlog;
    default:
      return textGridBlog;
  }
}

function computeContact(layout) {
  switch (layout) {
    case "centered":
      return centeredContact;
    case "splitLeft":
      return splitLeftContact;
    case "splitRight":
      return splitRightContact;
    default:
      return centeredContact;
  }
}

function computeContent(layout) {
  switch (layout) {
    case "content":
      return contentContent;
    default:
      return contentContent;
  }
}

function computeCta(layout) {
  switch (layout) {
    case "simple":
      return simpleCta;
    case "simpleLeft":
      return simpleLeftCta;
    case "simpleRight":
      return simpleRightCta;
    case "leftImage":
      return leftImageCta;
    case "rightImage":
      return rightImageCta;
    case "splitLeft":
      return splitLeftCta;
    case "splitRight":
      return splitRightCta;
    case "tiles2Left":
      return tiles2LeftCta;
    case "tiles2Right":
      return tiles2RightCta;
    case "tiles3Left":
      return tiles3LeftCta;
    case "tiles3Right":
      return tiles3RightCta;
    case "leftBg":
      return leftBgCta;
    case "centerBg":
      return centerBgCta;
    case "rightBg":
      return rightBgCta;
    case "leftGradient":
      return leftGradientCta;
    case "centerGradient":
      return centerGradientCta;
    case "rightGradient":
      return rightGradientCta;
    case "justified":
      return justifiedCta;
    case "simpleNewsletter":
      return simpleNewsletterCta;
    case "simpleLeftNewsletter":
      return simpleLeftNewsletterCta;
    case "simpleRightNewsletter":
      return simpleRightNewsletterCta;
    case "leftImageNewsletter":
      return leftImageNewsletterCta;
    case "rightImageNewsletter":
      return rightImageNewsletterCta;
    case "splitLeftNewsletter":
      return splitLeftNewsletterCta;
    case "splitRightNewsletter":
      return splitRightNewsletterCta;
    case "tiles2LeftNewsletter":
      return tiles2LeftNewsletterCta;
    case "tiles2RightNewsletter":
      return tiles2RightNewsletterCta;
    case "tiles3LeftNewsletter":
      return tiles3LeftNewsletterCta;
    case "tiles3RightNewsletter":
      return tiles3RightNewsletterCta;
    case "leftBgNewsletter":
      return leftBgNewsletterCta;
    case "centerBgNewsletter":
      return centerBgNewsletterCta;
    case "rightBgNewsletter":
      return rightBgNewsletterCta;
    case "leftGradientNewsletter":
      return leftGradientNewsletterCta;
    case "centerGradientNewsletter":
      return centerGradientNewsletterCta;
    case "rightGradientNewsletter":
      return rightGradientNewsletterCta;
    case "justifiedNewsletter":
      return justifiedNewsletterCta;
    default:
      return simpleCta;
  }
}

function computeFaq(layout) {
  switch (layout) {
    case "offset":
      return offsetFaq;
    case "accordion":
      return accordionFaq;
    case "inline":
      return inlineFaq;
    case "blurbGrid2":
      return blurbGrid2Faq;
    case "blurbGrid3":
      return blurbGrid3Faq;
    case "cardGrid2":
      return cardGrid2Faq;
    case "cardGrid3":
      return cardGrid3Faq;
    default:
      return offsetFaq;
  }
}

function computeFeature(layout) {
  switch (layout) {
    case "leftImage":
      return leftImageFeature;
    case "rightImage":
      return rightImageFeature;
    case "cardGrid":
      return cardGridFeature;
    case "blurbGrid":
      return blurbGridFeature;
    case "offsetGrid":
      return offsetGridFeature;
    case "offsetList":
      return offsetListFeature;
    case "list":
      return listFeature;
    default:
      return leftImageFeature;
  }
}

function computeFooter(layout) {
  switch (layout) {
    case "mission":
      return missionFooter;
    case "missionDark":
      return missionDarkFooter;
    case "missionPrimary":
      return missionPrimaryFooter;
    case "missionBg":
      return missionBgFooter;
    case "missionDarkBg":
      return missionDarkBgFooter;
    case "missionPrimaryBg":
      return missionPrimaryBgFooter;
    case "newsletter":
      return newsletterFooter;
    case "newsletterDark":
      return newsletterDarkFooter;
    case "newsletterPrimary":
      return newsletterPrimaryFooter;
    case "newsletterBg":
      return newsletterBgFooter;
    case "newsletterDarkBg":
      return newsletterDarkBgFooter;
    case "newsletterPrimaryBg":
      return newsletterPrimaryBgFooter;
    case "simple":
      return simpleFooter;
    case "simpleDark":
      return simpleDarkFooter;
    case "simplePrimary":
      return simplePrimaryFooter;
    case "simpleBg":
      return simpleBgFooter;
    case "simpleDarkBg":
      return simpleDarkBgFooter;
    case "simplePrimaryBg":
      return simplePrimaryBgFooter;
    case "inline":
      return inlineFooter;
    case "inlineDark":
      return inlineDarkFooter;
    case "inlinePrimary":
      return inlinePrimaryFooter;
    default:
      return missionFooter;
  }
}

function computeHeader(layout) {
  switch (layout) {
    case "left":
      return leftHeader;
    case "right":
      return rightHeader;
    case "leftImage":
      return leftImageHeader;
    case "rightImage":
      return rightImageHeader;
    case "center":
      return centerHeader;
    case "leftInverse":
      return leftInverseHeader;
    case "rightInverse":
      return rightInverseHeader;
    case "leftImageInverse":
      return leftImageInverseHeader;
    case "rightImageInverse":
      return rightImageInverseHeader;
    case "centerInverse":
      return centerInverseHeader;
    default:
      return leftHeader;
  }
}

function computeHero(layout) {
  switch (layout) {
    case "left":
      return leftHero;
    case "right":
      return rightHero;
    case "splitLeft":
      return splitLeftHero;
    case "splitRight":
      return splitRightHero;
    case "angledTopLeft":
      return angledTopLeftHero;
    case "angledTopRight":
      return angledTopRightHero;
    case "angledBottomLeft":
      return angledBottomLeftHero;
    case "angledBottomRight":
      return angledBottomRightHero;
    case "tiles2Left":
      return tiles2LeftHero;
    case "tiles2Right":
      return tiles2RightHero;
    case "tiles3Left":
      return tiles3LeftHero;
    case "tiles3Right":
      return tiles3RightHero;
    case "centerImage":
      return centerImageHero;
    case "leftBg":
      return leftBgHero;
    case "centerBg":
      return centerBgHero;
    case "rightBg":
      return rightBgHero;
    case "leftGradient":
      return leftGradientHero;
    case "centerGradient":
      return centerGradientHero;
    case "rightGradient":
      return rightGradientHero;
    default:
      return leftHero;
  }
}

function computeLogoClouds(layout) {
  switch (layout) {
    case "grid":
      return gridLogoCloud;
    case "simple":
      return simpleLogoCloud;
    case "split":
      return splitLogoCloud;
    default:
      return gridLogoCloud;
  }
}

function computeNavbar(layout) {
  switch (layout) {
    case "spaced":
      return spacedNavbar;
    case "start":
      return startNavbar;
    case "end":
      return endNavbar;
    case "centered":
      return centeredNavbar;
    case "stacked":
      return stackedNavbar;
    default:
      return spacedNavbar;
  }
}

function computePortfolio(layout) {
  switch (layout) {
    case "leftImage":
      return leftImagePortfolio;
    case "rightImage":
      return rightImagePortfolio;

    case "cardGrid2":
      return cardGrid2Portfolio;
    case "cover":
      return coverPortfolio;
    default:
      return leftImagePortfolio;
  }
}

function computeStats(layout) {
  switch (layout) {
    case "simple3":
      return simple3Stats;
    case "simple4":
      return simple4Stats;
    case "imageLeft":
      return imageLeftStats;
    case "imageRight":
      return imageRightStats;
    case "splitLeft":
      return splitLeftStats;
    case "splitRight":
      return splitRightStats;
    case "description":
      return descriptionStats;
    default:
      return simple3Stats;
  }
}

function computeTestimonials(layout) {
  switch (layout) {
    case "simpleQuote":
      return simpleQuoteTestimonials;
    case "centeredQuote":
      return centeredQuoteTestimonials;
    case "leftAvatar":
      return leftAvatarTestimonials;
    case "rightAvatar":
      return rightAvatarTestimonials;
    default:
      return simpleQuoteTestimonials;
  }
}

function computeTimeline(layout) {
  switch (layout) {
    case "inlineStart":
      return inlineStartTimeline;
    case "inlineStaggered":
      return inlineStaggeredTimeline;
    case "blockStart":
      return blockStartTimeline;
    case "blockStaggered":
      return blockStaggeredTimeline;
    default:
      return inlineStartTimeline;
  }
}
