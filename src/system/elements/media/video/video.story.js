import { html } from "lit";

export default {
  title: "Design System/Elements/Media/Video",
};

export const Default = () => html`
  <video controls>
    <source src="https://example.com/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
`;
