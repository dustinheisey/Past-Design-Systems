import {
  simpleQuoteTestimonials,
  centeredQuoteTestimonials,
  leftAvatarTestimonials,
  rightAvatarTestimonials,
  splitTestimonials,
} from "./testimonials.js";

export default {
  title: "Regions/Testimonials",
};

export const SimpleQuote = () => simpleQuoteTestimonials;
export const CenteredQuote = () => centeredQuoteTestimonials;
export const LeftAvatar = () => leftAvatarTestimonials;
export const RightAvatar = () => rightAvatarTestimonials;
export const Split = () => splitTestimonials;
// export const SplitWithImage = () => splitWithImageTestimonials;
// export const BgImage = () => bgImageTestimonials;
