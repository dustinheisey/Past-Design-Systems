import { html } from "lit";
import {
  textGridBlog,
  cardGridBlog,
  imgGridBlog,
  stackBlog,
  leftBlog,
  featuredTextGridBlog,
  featuredMixedGridBlog,
  featuredCardGridBlog,
} from "./blog.js";

export default {
  title: "Design System/Regions/Blog",
  decorators: [
    (story) => html`<div style="inline-size: 95vw">${story()}</div>`,
  ],
};

export const TextGrid = () => textGridBlog;
export const CardGrid = () => cardGridBlog;
export const ImgGrid = () => imgGridBlog;
export const Stack = () => stackBlog;
export const Left = () => leftBlog;
export const FeaturedTextGrid = () => featuredTextGridBlog;
export const FeaturedMixedGrid = () => featuredMixedGridBlog;
export const FeaturedCardGrid = () => featuredCardGridBlog;
