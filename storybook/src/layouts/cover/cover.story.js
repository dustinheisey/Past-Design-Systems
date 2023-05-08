import { html } from "lit";

export default {
  title: "Design System/Layouts/Cover",
};

export const Default = () =>
  html`
    <div class="cover cover-nav">
      <header>
        <nav>
          <ul class="cluster">
            <li><a href="#" class="link link-navigation">Link 1</a></li>
            <li><a href="#" class="link link-navigation">Link 2</a></li>
            <li><a href="#" class="link link-navigation">Link 3</a></li>
            <li><a href="#" class="link link-navigation">Link 4</a></li>
            <li><a href="#" class="link link-navigation">Link 5</a></li>
          </ul>
        </nav>
      </header>
      <div class="principle center prose">
        <h1 class="hero-headline">Hero Headline</h1>
        <p>
          Enim consequat nulla cillum amet enim proident exercitation et dolore
          sint consectetur aliqua. Pariatur consequat incididunt dolore pariatur
          elit elit cupidatat reprehenderit ea nisi. Id officia deserunt qui
          magna. Occaecat eu qui qui tempor in nisi elit sit in consequat. Aute
          ut adipisicing veniam ad elit non officia eu.
        </p>
      </div>
      <p>Footer Text</p>
    </div>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Cover component is a layout tool used to create introductory content above the fold of a web page, typically with a nested Cluster element to lay out the logo, navigation menu, and a centered header.",
    },
    source: {
      code: `
<div class="center">
</div>
    `,
    },
  },
};

export const SplitScreen = () =>
  html`
    <div class="cover cover-nav">
      <header>
        <nav>
          <ul class="cluster">
            <li><a href="#" class="link link-navigation">Link 1</a></li>
            <li><a href="#" class="link link-navigation">Link 2</a></li>
            <li><a href="#" class="link link-navigation">Link 3</a></li>
            <li><a href="#" class="link link-navigation">Link 4</a></li>
            <li><a href="#" class="link link-navigation">Link 5</a></li>
          </ul>
        </nav>
      </header>
      <div class="principle split-screen">
        <div class="prose">
          <h1 class="hero-headline">Hero Headline</h1>
          <p>
            Enim consequat nulla cillum amet enim proident exercitation et
            dolore sint consectetur aliqua. Pariatur consequat incididunt dolore
            pariatur elit elit cupidatat reprehenderit ea nisi. Id officia
            deserunt qui magna. Occaecat eu qui qui tempor in nisi elit sit in
            consequat. Aute ut adipisicing veniam ad elit non officia eu.
          </p>
        </div>
        <div class="frame">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt="placeholder"
          />
        </div>
      </div>
      <p>Footer Text</p>
    </div>
  `;

export const Background = () =>
  html`
    <div class="bg-img">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
      <div class="cover cover-nav">
        <header>
          <nav>
            <ul class="cluster">
              <li><a href="#" class="link link-navigation">Link 1</a></li>
              <li><a href="#" class="link link-navigation">Link 2</a></li>
              <li><a href="#" class="link link-navigation">Link 3</a></li>
              <li><a href="#" class="link link-navigation">Link 4</a></li>
              <li><a href="#" class="link link-navigation">Link 5</a></li>
            </ul>
          </nav>
        </header>
        <div class="principle prose">
          <h1 class="hero-headline">Hero Headline</h1>
          <p>
            Enim consequat nulla cillum amet enim proident exercitation et
            dolore sint consectetur aliqua. Pariatur consequat incididunt dolore
            pariatur elit elit cupidatat reprehenderit ea nisi. Id officia
            deserunt qui magna. Occaecat eu qui qui tempor in nisi elit sit in
            consequat. Aute ut adipisicing veniam ad elit non officia eu.
          </p>
        </div>
        <p>Footer Text</p>
      </div>
    </div>
  `;
