import { html } from "lit";

export const simpleQuoteTestimonials = html`
  <div class="cover cover-nav">
    <blockquote class="center blockquote-accent">
      <p>
        I am beyond pleased with Dustin’s impeccable service. He was extremely
        attentive in understanding my business and provided very personalized
        help. Great designer. I 100% recommend working with him.
      </p>
      <footer>Jarod Hoover | CEO of Hoover Honey</footer>
    </blockquote>
  </div>
`;

export const centeredQuoteTestimonials = html`
  <div class="cover center cover-nav">
    <figure class="stack center center-intrinsic gap-s">
      <img
        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
        alt="placeholder"
      />
      <blockquote>
        <p>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.”
        </p>
      </blockquote>
      <figcaption class="cluster">
        <img
          class="avatar"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="placeholder"
        />
        <p class="caption"><strong>Judith Black</strong> | CEO of Workcation</p>
      </figcaption>
    </figure>
  </div>
`;

export const leftAvatarTestimonials = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar gap-m">
        <div class="frame fixed square">
          <img
            src="https://generative-placeholders.glitch.me/image?width=300&height=300"
            alt="placeholder"
            srcset=""
          />
        </div>
        <div class="center">
          <blockquote class="blockquote-accent">
            <p>
              I am beyond pleased with Dustin’s impeccable service. He was
              extremely attentive in understanding my business and provided very
              personalized help. Great designer. I 100% recommend working with
              him.
            </p>
            <footer>Jarod Hoover | CEO of Hoover Honey</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
`;

export const rightAvatarTestimonials = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar gap-m">
        <div class="center">
          <blockquote class="blockquote-accent">
            <p>
              I am beyond pleased with Dustin’s impeccable service. He was
              extremely attentive in understanding my business and provided very
              personalized help. Great designer. I 100% recommend working with
              him.
            </p>
            <footer>Jarod Hoover | CEO of Hoover Honey</footer>
          </blockquote>
        </div>
        <div class="frame fixed square">
          <img
            src="https://generative-placeholders.glitch.me/image?width=300&height=300"
            alt="placeholder"
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
`;
