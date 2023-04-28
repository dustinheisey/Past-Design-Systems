import { html } from "lit";

export default {
  title: "Layouts/Sticky",
};

export const Default = () => html`
  <section class="split-scroll">
    <div class="split-scroll-text">
      <h2>Discover our new collection</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis,
        libero non bibendum tincidunt, nisl nulla feugiat orci, in egestas nulla
        mi sed sapien.
      </p>
      <p>
        Suspendisse vel leo ac enim molestie lacinia. Nulla non tincidunt
        mauris. Donec ultrices tristique nulla. Nunc gravida velit elit, vel
        hendrerit erat fermentum a.
      </p>
      <p>
        Nam vel orci imperdiet, cursus massa ac, bibendum turpis. Praesent
        tincidunt sapien eget tellus interdum, nec gravida justo eleifend. In
        hac habitasse platea dictumst.
      </p>
      <p>
        Nunc maximus, ipsum sed mollis laoreet, ex lorem lacinia odio, a
        interdum odio quam in lorem. Ut facilisis dapibus neque, quis laoreet
        ante dictum a. Donec vel venenatis lectus, in varius nisl.
      </p>
      <p>
        Nunc non pharetra velit. Aliquam dignissim magna sit amet mauris
        dignissim, sed fringilla ipsum blandit. Sed vel purus a ante eleifend
        lobortis.
      </p>
    </div>
    <div class="split-scroll-image"></div>
  </section>
`;
