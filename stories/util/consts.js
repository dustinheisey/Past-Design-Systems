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
import bgCenterAction from '../../macros/regions/action/bg-center.njk'
import bgEndAction from '../../macros/regions/action/bg-end.njk'
import bgPatternAction from '../../macros/regions/action/bg-pattern.njk'
import bgStartAction from '../../macros/regions/action/bg-start.njk'
import coverEndAction from '../../macros/regions/action/cover-end.njk'
import coverStartAction from '../../macros/regions/action/cover-start.njk'
import coverAction from '../../macros/regions/action/cover.njk'
import gradientCenterAction from '../../macros/regions/action/gradient-center.njk'
import gradientEndAction from '../../macros/regions/action/gradient-end.njk'
import gradientStartAction from '../../macros/regions/action/gradient-start.njk'
import imgCenterAction from '../../macros/regions/action/img-center.njk'
import imgEndAction from '../../macros/regions/action/img-end.njk'
import imgStartAction from '../../macros/regions/action/img-start.njk'
import inlineAction from '../../macros/regions/action/inline.njk'
import simpleEndAction from '../../macros/regions/action/simple-end.njk'
import simpleStartAction from '../../macros/regions/action/simple-start.njk'
import simpleAction from '../../macros/regions/action/simple.njk'
import splitEndAction from '../../macros/regions/action/split-end.njk'
import splitStartAction from '../../macros/regions/action/split-start.njk'
import tiles2EndAction from '../../macros/regions/action/tiles-2-end.njk'
import tiles2StartAction from '../../macros/regions/action/tiles-2-start.njk'
import tiles3EndAction from '../../macros/regions/action/tiles-3-end.njk'
import tiles3StartAction from '../../macros/regions/action/tiles-3-start.njk'

import postCopy from '../../macros/regions/copy/post.njk'

import accordionFaq from '../../macros/regions/faq/accordion.njk'
import blurbGrid2Faq from '../../macros/regions/faq/blurb-grid-2.njk'
import blurbGrid3Faq from '../../macros/regions/faq/blurb-grid-3.njk'
import cardGrid2Faq from '../../macros/regions/faq/card-grid-2.njk'
import cardGrid3Faq from '../../macros/regions/faq/card-grid-3.njk'
import inlineFaq from '../../macros/regions/faq/inline.njk'
import offsetFaq from '../../macros/regions/faq/offset.njk'

import bgPatternFeature from '../../macros/regions/feature/bg-pattern.njk'
import blurbGridFeature from '../../macros/regions/feature/blurb-grid.njk'
import cardGridFeature from '../../macros/regions/feature/card-grid.njk'
import descriptionFeature from '../../macros/regions/feature/description.njk'
import imgEndFeature from '../../macros/regions/feature/img-end.njk'
import listFeature from '../../macros/regions/feature/list.njk'
import offsetGridFeature from '../../macros/regions/feature/offset-grid.njk'
import offsetListFeature from '../../macros/regions/feature/offset-list.njk'
import imgStartFeature from '../../macros/regions/feature/img-start.njk'

import inlineFooter from '../../macros/regions/footer/inline.njk'
import missionBgFooter from '../../macros/regions/footer/mission-bg.njk'
import missionFooter from '../../macros/regions/footer/mission.njk'
import newsletterBgFooter from '../../macros/regions/footer/newsletter-bg.njk'
import newsletterFooter from '../../macros/regions/footer/newsletter.njk'
import simpleBgFooter from '../../macros/regions/footer/simple-bg.njk'
import simpleFooter from '../../macros/regions/footer/simple.njk'

import centerForm from '../../macros/regions/form/center.njk'
import splitEndForm from '../../macros/regions/form/split-end.njk'
import splitStartForm from '../../macros/regions/form/split-start.njk'

import cardGridGallery from '../../macros/regions/gallery/card-grid.njk'
import featuredCardGridGallery from '../../macros/regions/gallery/featured-card-grid.njk'
import featuredMixedGridGallery from '../../macros/regions/gallery/featured-mixed-grid.njk'
import featuredTextGridGallery from '../../macros/regions/gallery/featured-text-grid.njk'
import imgGridGallery from '../../macros/regions/gallery/img-grid.njk'
import masonryGallery from '../../macros/regions/gallery/masonry.njk'
import startGallery from '../../macros/regions/gallery/start.njk'
import stackGallery from '../../macros/regions/gallery/stack.njk'
import textGridGallery from '../../macros/regions/gallery/text-grid.njk'
import cardGrid2Gallery from '../../macros/regions/gallery/card-grid-2.njk'

import centerHeader from '../../macros/regions/header/center.njk'
import endHeader from '../../macros/regions/header/end.njk'
import spacedHeader from '../../macros/regions/header/spaced.njk'
import stackedHeader from '../../macros/regions/header/stacked.njk'
import startHeader from '../../macros/regions/header/start.njk'

import angledBlockEndStartHero from '../../macros/regions/hero/angled-block-end-start.njk'
import angledBlockEndEndHero from '../../macros/regions/hero/angled-block-end-end.njk'
import angledBlockStartStartHero from '../../macros/regions/hero/angled-block-start-start.njk'
import angledBlockStartEndHero from '../../macros/regions/hero/angled-block-start-end.njk'
import bgCenterHero from '../../macros/regions/hero/bg-center.njk'
import bgEndHero from '../../macros/regions/hero/bg-end.njk'
import bgStartHero from '../../macros/regions/hero/bg-start.njk'
import endHero from '../../macros/regions/hero/end.njk'
import gradientCenterHero from '../../macros/regions/hero/gradient-center.njk'
import gradientEndHero from '../../macros/regions/hero/gradient-end.njk'
import gradientStartHero from '../../macros/regions/hero/gradient-start.njk'
import imgCenterHero from '../../macros/regions/hero/img-center.njk'
import imgEndHero from '../../macros/regions/hero/img-end.njk'
import imgStartHero from '../../macros/regions/hero/img-start.njk'
import startHero from '../../macros/regions/hero/start.njk'
import splitEndHero from '../../macros/regions/hero/split-end.njk'
import splitStartHero from '../../macros/regions/hero/split-start.njk'
import tiles2StartHero from '../../macros/regions/hero/tiles-2-start.njk'
import tiles2EndHero from '../../macros/regions/hero/tiles-2-end.njk'
import tiles3StartHero from '../../macros/regions/hero/tiles-3-start.njk'
import tiles3EndHero from '../../macros/regions/hero/tiles-3-end.njk'

import centerIntro from '../../macros/regions/intro/center.njk'
import startIntro from '../../macros/regions/intro/start.njk'
import endIntro from '../../macros/regions/intro/end.njk'
import imgStartIntro from '../../macros/regions/intro/img-start.njk'
import imgEndIntro from '../../macros/regions/intro/img-end.njk'

import gridLogos from '../../macros/regions/logos/grid.njk'
import simpleLogos from '../../macros/regions/logos/simple.njk'
import splitLogos from '../../macros/regions/logos/split.njk'

// pricing single, tiers-dividers, tiers

import descriptionStats from '../../macros/regions/stats/description.njk'
import imgEndStats from '../../macros/regions/stats/img-end.njk'
import imgStartStats from '../../macros/regions/stats/img-start.njk'
import simple3Stats from '../../macros/regions/stats/simple-3.njk'
import simple4Stats from '../../macros/regions/stats/simple-4.njk'
import splitEndStats from '../../macros/regions/stats/split-end.njk'
import splitStartStats from '../../macros/regions/stats/split-start.njk'

import avatarEndTestimonials from '../../macros/regions/testimonials/avatar-end.njk'
import avatarStartTestimonials from '../../macros/regions/testimonials/avatar-start.njk'
import quoteCenterTestimonials from '../../macros/regions/testimonials/quote-center.njk'
import quoteSimpleTestimonials from '../../macros/regions/testimonials/quote-simple.njk'

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
    'masonry-gallery': masonryGallery,
    'img-grid-gallery': imgGridGallery,
    'start-gallery': startGallery,
    'stack-gallery': stackGallery,
    'text-grid-gallery': textGridGallery,
    'card-grid-2-gallery': cardGrid2Gallery
  },
  form: {
    'center-form': centerForm,
    'split-start-form': splitStartForm,
    'split-end-form': splitEndForm
  },
  action: {
    'bg-pattern-action': bgPatternAction,
    'cover-end-action': coverEndAction,
    'cover-start-action': coverStartAction,
    'cover-action': coverAction,
    'bg-center-action': bgCenterAction,
    'gradient-center-action': gradientCenterAction,
    'img-center-action': imgCenterAction,
    'inline-action': inlineAction,
    'bg-start-action': bgStartAction,
    'gradient-start-action': gradientStartAction,
    'img-start-action': imgStartAction,
    'bg-end-action': bgEndAction,
    'gradient-end-action': gradientEndAction,
    'img-end-action': imgEndAction,
    'simple-start-action': simpleStartAction,
    'simple-end-action': simpleEndAction,
    'simple-action': simpleAction,
    'split-start-action': splitStartAction,
    'split-end-action': splitEndAction,
    'tiles-2-start-action': tiles2StartAction,
    'tiles-2-end-action': tiles2EndAction,
    'tiles-3-start-action': tiles3StartAction,
    'tiles-3-end-action': tiles3EndAction
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
    'end-intro': endIntro,
    'start-intro': startIntro,
    'img-end-intro': imgEndIntro,
    'img-start-intro': imgStartIntro
  },
  hero: {
    'angled-block-end-end-hero': angledBlockEndEndHero,
    'angled-block-end-start-hero': angledBlockEndStartHero,
    'angled-block-start-end-hero': angledBlockStartEndHero,
    'angled-block-start-start-hero': angledBlockStartStartHero,
    'bg-center-hero': bgCenterHero,
    'gradient-center-hero': gradientCenterHero,
    'img-center-hero': imgCenterHero,
    'bg-start-hero': bgStartHero,
    'gradient-start-hero': gradientStartHero,
    'img-start-hero': imgStartHero,
    'start-hero': startHero,
    'bg-end-hero': bgEndHero,
    'gradient-end-hero': gradientEndHero,
    'img-end-hero': imgEndHero,
    'end-hero': endHero,
    'split-start-hero': splitStartHero,
    'split-end-hero': splitEndHero,
    'tiles-2-start-hero': tiles2StartHero,
    'tiles-2-end-hero': tiles2EndHero,
    'tiles-3-start-hero': tiles3StartHero,
    'tiles-3-end-hero': tiles3EndHero
  },
  feature: {
    'bg-pattern-feature': bgPatternFeature,
    'blurb-grid-feature': blurbGridFeature,
    'card-grid-feature': cardGridFeature,
    'description-feature': descriptionFeature,
    'img-start-feature': imgStartFeature,
    'list-feature': listFeature,
    'offset-grid-feature': offsetGridFeature,
    'offset-list-feature': offsetListFeature,
    'img-end-feature': imgEndFeature
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
    'img-end-stats': imgEndStats,
    'img-start-stats': imgStartStats,
    'simple-3-stats': simple3Stats,
    'simple-4-stats': simple4Stats,
    'split-end-stats': splitEndStats,
    'split-start-stats': splitStartStats
  },
  testimonials: {
    'avatar-end-testimonials': avatarEndTestimonials,
    'avatar-start-testimonials': avatarStartTestimonials,
    'quote-center-testimonials': quoteCenterTestimonials,
    'quote-simple-testimonials': quoteSimpleTestimonials
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
    'bg-center-action': bgCenterAction,
    'simple-action': simpleAction,
    'split-start-action': splitStartAction
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
