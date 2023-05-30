// ? Component Imports
import accordion from '../../macros/components/accordion.njk'
import banner from '../../macros/components/banner.njk'
import blurb from '../../macros/components/blurb.njk'
import breadcrumb from '../../macros/components/breadcrumb.njk'
import buttonGroup from '../../macros/components/button-group.njk'
import card from '../../macros/components/card.njk'
import darkMode from '../../macros/components/dark-mode.njk'
import inputGroup from '../../macros/components/input-group.njk'
import navbar from '../../macros/components/navbar.njk'
import strip from '../../macros/components/strip.njk'

// ? Region Imports
import centerBgAction from '../../macros/regions/action/center-bg.njk'
import centerGradientAction from '../../macros/regions/action/center-gradient.njk'
import centerImgAction from '../../macros/regions/action/center-img.njk'
import justifiedAction from '../../macros/regions/action/justified.njk'
import leftBgAction from '../../macros/regions/action/left-bg.njk'
import leftGradientAction from '../../macros/regions/action/left-gradient.njk'
import leftImgAction from '../../macros/regions/action/left-img.njk'
import rightBgAction from '../../macros/regions/action/right-bg.njk'
import rightGradientAction from '../../macros/regions/action/right-gradient.njk'
import rightImgAction from '../../macros/regions/action/right-img.njk'
import simpleLeftAction from '../../macros/regions/action/simple-left.njk'
import simpleRightAction from '../../macros/regions/action/simple-right.njk'
import simpleAction from '../../macros/regions/action/simple.njk'
import splitLeftAction from '../../macros/regions/action/split-left.njk'
import splitRightAction from '../../macros/regions/action/split-right.njk'
import tiles2LeftAction from '../../macros/regions/action/tiles-2-left.njk'
import tiles2RightAction from '../../macros/regions/action/tiles-2-right.njk'
import tiles3LeftAction from '../../macros/regions/action/tiles-3-left.njk'
import tiles3RightAction from '../../macros/regions/action/tiles-3-right.njk'

import postCopy from '../../macros/regions/copy/post.njk'

import accordionFaq from '../../macros/regions/faq/accordion.njk'
import blurbGrid2Faq from '../../macros/regions/faq/blurb-grid-2.njk'
import blurbGrid3Faq from '../../macros/regions/faq/blurb-grid-3.njk'
import cardGrid2Faq from '../../macros/regions/faq/card-grid-2.njk'
import cardGrid3Faq from '../../macros/regions/faq/card-grid-3.njk'
import inlineFaq from '../../macros/regions/faq/inline.njk'
import offsetFaq from '../../macros/regions/faq/offset.njk'

import blurbGridFeature from '../../macros/regions/feature/blurb-grid.njk'
import cardGridFeature from '../../macros/regions/feature/card-grid.njk'
import leftImgFeature from '../../macros/regions/feature/left-img.njk'
import listFeature from '../../macros/regions/feature/list.njk'
import offsetGridFeature from '../../macros/regions/feature/offset-grid.njk'
import offsetListFeature from '../../macros/regions/feature/offset-list.njk'
import rightImgFeature from '../../macros/regions/feature/right-img.njk'

import inlineFooter from '../../macros/regions/footer/inline.njk'
import missionBgFooter from '../../macros/regions/footer/mission-bg.njk'
import missionFooter from '../../macros/regions/footer/mission.njk'
import newsletterBgFooter from '../../macros/regions/footer/newsletter-bg.njk'
import newsletterFooter from '../../macros/regions/footer/newsletter.njk'
import simpleBgFooter from '../../macros/regions/footer/simple-bg.njk'
import simpleFooter from '../../macros/regions/footer/simple.njk'

import centerForm from '../../macros/regions/form/center.njk'
import splitLeftForm from '../../macros/regions/form/split-left.njk'
import splitRightForm from '../../macros/regions/form/split-right.njk'

import cardGridGallery from '../../macros/regions/gallery/card-grid.njk'
import featuredCardGridGallery from '../../macros/regions/gallery/featured-card-grid.njk'
import featuredMixedGridGallery from '../../macros/regions/gallery/featured-mixed-grid.njk'
import featuredTextGridGallery from '../../macros/regions/gallery/featured-text-grid.njk'
import imgGridGallery from '../../macros/regions/gallery/img-grid.njk'
import leftGallery from '../../macros/regions/gallery/left.njk'
import stackGallery from '../../macros/regions/gallery/stack.njk'
import textGridGallery from '../../macros/regions/gallery/text-grid.njk'
import cardGrid2Gallery from '../../macros/regions/gallery/card-grid-2.njk'

import centerHeader from '../../macros/regions/header/center.njk'
import endHeader from '../../macros/regions/header/end.njk'
import spacedHeader from '../../macros/regions/header/spaced.njk'
import stackedHeader from '../../macros/regions/header/stacked.njk'
import startHeader from '../../macros/regions/header/start.njk'

import angledBottomLeftHero from '../../macros/regions/hero/angled-bottom-left.njk'
import angledBottomRightHero from '../../macros/regions/hero/angled-bottom-right.njk'
import angledTopLeftHero from '../../macros/regions/hero/angled-top-left.njk'
import angledTopRightHero from '../../macros/regions/hero/angled-top-right.njk'
import centerBgHero from '../../macros/regions/hero/center-bg.njk'
import centerGradientHero from '../../macros/regions/hero/center-gradient.njk'
import centerImgHero from '../../macros/regions/hero/center-img.njk'
import leftBgHero from '../../macros/regions/hero/left-bg.njk'
import leftGradientHero from '../../macros/regions/hero/left-gradient.njk'
import leftImgHero from '../../macros/regions/hero/left-img.njk'
import leftHero from '../../macros/regions/hero/left.njk'
import rightBgHero from '../../macros/regions/hero/right-bg.njk'
import rightGradientHero from '../../macros/regions/hero/right-gradient.njk'
import rightImgHero from '../../macros/regions/hero/right-img.njk'
import rightHero from '../../macros/regions/hero/right.njk'
import splitLeftHero from '../../macros/regions/hero/split-left.njk'
import splitRightHero from '../../macros/regions/hero/split-right.njk'
import tiles2LeftHero from '../../macros/regions/hero/tiles-2-left.njk'
import tiles2RightHero from '../../macros/regions/hero/tiles-2-right.njk'
import tiles3LeftHero from '../../macros/regions/hero/tiles-3-left.njk'
import tiles3RightHero from '../../macros/regions/hero/tiles-3-right.njk'

import centerIntro from '../../macros/regions/intro/center.njk'
import leftIntro from '../../macros/regions/intro/left.njk'
import rightIntro from '../../macros/regions/intro/right.njk'

import gridLogos from '../../macros/regions/logos/grid.njk'
import simpleLogos from '../../macros/regions/logos/simple.njk'
import splitLogos from '../../macros/regions/logos/split.njk'

// pricing single, tiers-dividers, tiers

import descriptionStats from '../../macros/regions/stats/description.njk'
import imgLeftStats from '../../macros/regions/stats/img-left.njk'
import imgRightStats from '../../macros/regions/stats/img-right.njk'
import simple3Stats from '../../macros/regions/stats/simple-3.njk'
import simple4Stats from '../../macros/regions/stats/simple-4.njk'
import splitLeftStats from '../../macros/regions/stats/split-left.njk'
import splitRightStats from '../../macros/regions/stats/split-right.njk'

import centerQuoteTestimonials from '../../macros/regions/testimonials/center-quote.njk'
import leftAvatarTestimonials from '../../macros/regions/testimonials/left-avatar.njk'
import rightAvatarTestimonials from '../../macros/regions/testimonials/right-avatar.njk'
import simpleQuoteTestimonials from '../../macros/regions/testimonials/simple-quote.njk'

import blockStaggeredTimeline from '../../macros/regions/timeline/block-staggered.njk'
import blockStartTimeline from '../../macros/regions/timeline/block-start.njk'
import inlineStaggeredTimeline from '../../macros/regions/timeline/inline-staggered.njk'
import inlineStartTimeline from '../../macros/regions/timeline/inline-start.njk'

export const components = {
  accordion,
  banner,
  blurb,
  breadcrumb,
  buttonGroup,
  card,
  darkMode,
  inputGroup,
  navbar,
  strip
}

export const regions = {
  gallery: {
    'card-grid-gallery': cardGridGallery,
    'featured-card-grid-gallery': featuredCardGridGallery,
    'featured-mixed-grid-gallery': featuredMixedGridGallery,
    'featured-text-grid-gallery': featuredTextGridGallery,
    'img-grid-gallery': imgGridGallery,
    'left-gallery': leftGallery,
    'stack-gallery': stackGallery,
    'text-grid-gallery': textGridGallery,
    'card-grid-2-gallery': cardGrid2Gallery
  },
  form: {
    'center-form': centerForm,
    'split-left-form': splitLeftForm,
    'split-right-form': splitRightForm
  },
  action: {
    'center-bg-action': centerBgAction,
    'center-gradient-action': centerGradientAction,
    'center-img-action': centerImgAction,
    'justified-action': justifiedAction,
    'left-bg-action': leftBgAction,
    'left-gradient-action': leftGradientAction,
    'left-img-action': leftImgAction,
    'right-bg-action': rightBgAction,
    'right-gradient-action': rightGradientAction,
    'right-img-action': rightImgAction,
    'simple-left-action': simpleLeftAction,
    'simple-right-action': simpleRightAction,
    'simple-action': simpleAction,
    'split-left-action': splitLeftAction,
    'split-right-action': splitRightAction,
    'tiles-2-left-action': tiles2LeftAction,
    'tiles-2-right-action': tiles2RightAction,
    'tiles-3-left-action': tiles3LeftAction,
    'tiles-3-right-action': tiles3RightAction
  },
  faq: {
    'accordion-faq': accordionFaq,
    'blurb-grid-2-faq': blurbGrid2Faq,
    'blurb-grid-3-faq': blurbGrid3Faq,
    'card-grid-2-faq': cardGrid2Faq,
    'card-grid-3-faq': cardGrid3Faq,
    'inline-faq': inlineFaq,
    'offset-faq': offsetFaq
  },
  footer: {
    'inline-footer': inlineFooter,
    'mission-bg-footer': missionBgFooter,
    'mission-footer': missionFooter,
    'newsletter-bg-footer': newsletterBgFooter,
    'newsletter-footer': newsletterFooter,
    'simple-bg-footer': simpleBgFooter,
    'simple-footer': simpleFooter
  },
  intro: {
    'center-intro': centerIntro,
    'left-intro': leftIntro,
    'right-intro': rightIntro
  },
  hero: {
    'angled-bottom-left-hero': angledBottomLeftHero,
    'angled-bottom-right-hero': angledBottomRightHero,
    'angled-top-left-hero': angledTopLeftHero,
    'angled-top-right-hero': angledTopRightHero,
    'center-bg-hero': centerBgHero,
    'center-gradient-hero': centerGradientHero,
    'center-img-hero': centerImgHero,
    'left-bg-hero': leftBgHero,
    'left-gradient-hero': leftGradientHero,
    'left-img-hero': leftImgHero,
    'left-hero': leftHero,
    'right-bg-hero': rightBgHero,
    'right-gradient-hero': rightGradientHero,
    'right-img-hero': rightImgHero,
    'right-hero': rightHero,
    'split-left-hero': splitLeftHero,
    'split-right-hero': splitRightHero,
    'tiles-2-left-hero': tiles2LeftHero,
    'tiles-2-right-hero': tiles2RightHero,
    'tiles-3-left-hero': tiles3LeftHero,
    'tiles-3-right-hero': tiles3RightHero
  },
  feature: {
    'blurb-grid-feature': blurbGridFeature,
    'card-grid-feature': cardGridFeature,
    'left-img-feature': leftImgFeature,
    'list-feature': listFeature,
    'offset-grid-feature': offsetGridFeature,
    'offset-list-feature': offsetListFeature,
    'right-img-feature': rightImgFeature
  },
  logos: {
    'grid-logos': gridLogos,
    'simple-logos': simpleLogos,
    'split-logos': splitLogos
  },
  header: {
    'center-header': centerHeader,
    'end-header': endHeader,
    'spaced-header': spacedHeader,
    'stacked-header': stackedHeader,
    'start-header': startHeader
  },
  copy: {
    'post-copy': postCopy
  },
  stats: {
    'description-stats': descriptionStats,
    'img-left-stats': imgLeftStats,
    'img-right-stats': imgRightStats,
    'simple-3-stats': simple3Stats,
    'simple-4-stats': simple4Stats,
    'split-left-stats': splitLeftStats,
    'split-right-stats': splitRightStats
  },
  testimonials: {
    'center-quote-testimonials': centerQuoteTestimonials,
    'left-avatar-testimonials': leftAvatarTestimonials,
    'right-avatar-testimonials': rightAvatarTestimonials,
    'simple-quote-testimonials': simpleQuoteTestimonials
  },
  timeline: {
    'block-staggered-timeline': blockStaggeredTimeline,
    'block-start-timeline': blockStartTimeline,
    'inline-staggered-timeline': inlineStaggeredTimeline,
    'inline-start-timeline': inlineStartTimeline
  }
}

export const pageRegions = {
  about: {
    hero: regions.hero,
    story: regions.intro,
    skills: { ...regions.gallery, ...regions.feature, ...regions.stats },
    portfolio: regions.gallery,
    testimonials: regions.testimonials,
    action: regions.action
  },
  blog: {
    hero: regions.hero,
    grid: regions.gallery,
    action: regions.action
  },
  post: {
    intro: regions.intro,
    copy: regions.copy,
    action: regions.action
  },
  contact: {
    intro: regions.intro,
    form: regions.form,
    faq: regions.faq
  },
  error: {
    'center-bg-action': centerBgAction,
    'simple-action': simpleAction,
    'split-left-action': splitLeftAction
  },
  footer: regions.footer,
  landing: {
    hero: regions.hero,
    problem: regions.intro,
    guide: regions.feature,
    plan: { ...regions.feature, ...regions.gallery },
    action: regions.action,
    success: regions.testimonials,
    freebie: regions.action
  },
  header: regions.header,
  portfolio: {
    hero: regions.hero,
    grid: regions.gallery,
    testimonials: regions.testimonials,
    action: regions.action
  },
  service: {
    hero: regions.hero,
    problem: regions.intro,
    description: regions.feature,
    proof: { ...regions.testimonials, ...regions.gallery },
    process: regions.timeline,
    pricing: regions.pricing,
    transformation: regions.feature,
    faq: regions.faq,
    action: regions.action
  },
  services: {
    hero: regions.hero,
    intro: regions.intro,
    service1: regions.action,
    service2: regions.action,
    service3: regions.action,
    service4: regions.action,
    testimonials: regions.testimonials,
    action: regions.action
  }
}

export const themes = [
  'background',
  'background-inverse',
  'surface',
  'surface-inverse',
  'primary',
  'primary-container',
  'secondary',
  'secondary-container',
  'tertiary',
  'tertiary-container',
  'error',
  'error-container'
]
