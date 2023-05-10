import {
  inlineStartTimeline,
  inlineStaggeredTimeline,
  blockStartTimeline,
  blockStaggeredTimeline,
} from "./timeline.js";

export default {
  title: "Design System/Regions/Timeline",
};

export const InlineStart = () => inlineStartTimeline;
export const InlineStaggered = () => inlineStaggeredTimeline;
export const BlockStart = () => blockStartTimeline;
export const BlockStaggered = () => blockStaggeredTimeline;