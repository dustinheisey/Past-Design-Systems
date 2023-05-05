import { html } from "lit";
import {
  centered,
  spaced,
  start,
  end,
  stacked,
} from "../../components/navigation/navbar/navbar.js";

function computeNavbar(navbar) {
  switch (navbar) {
    case "centered":
      return centered;
    case "spaced":
      return spaced;
    case "start":
      return start;
    case "end":
      return end;
    case "stacked":
      return stacked;
    default:
      return centered;
  }
}

export const leftImageHeader = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt=""
            srcset=""
          />
        </div>
        <div class="prose fixed">
          <p class="overline">Overline Text</p>
          <h1>landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse. Nulla quis dolore minim magna do est consectetur
            eu anim aute.
          </p>
          <button class="btn">Call to Action</button>
        </div>
      </div>
    </main>
  </div>
`;

export const rightImageHeader = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="prose fixed">
          <p class="overline">Overline Text</p>
          <h1>landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse. Nulla quis dolore minim magna do est consectetur
            eu anim aute.
          </p>
          <button class="btn">Call to Action</button>
        </div>
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </main>
  </div>
`;

export const leftHeader = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle prose">
          <p class="overline">Overline Text</p>
          <h1>landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse. Nulla quis dolore minim magna do est consectetur
            eu anim aute.
          </p>
          <button class="btn">Call to Action</button>
        </div>
  </div>
`;

export const rightHeader = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <div class="principle stack align-end">
      <div class=" prose">
        <p class="overline">Overline Text</p>
        <h1>landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse. Nulla quis dolore minim magna do est consectetur eu anim aute.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
  </div>
`;

export const centerHeader = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <div class="principle center prose">
      <p class="overline">Overline Text</p>
      <h1>landing page title</h1>
      <p>
        Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit sunt
        cillum exercitation anim dolor voluptate. Sunt in eu exercitation
        pariatur elit. Quis magna enim ut id irure est. Magna laborum non fugiat
        aute est quis duis incididunt. Ad sint eiusmod sint tempor esse. Nulla
        quis dolore minim magna do est consectetur eu anim aute.
      </p>
      <button class="btn">Call to Action</button>
    </div>
  </div>
`;

export const leftImageInverseHeader = (navbar) => html`
  <div class="cover cover-nav theme-dark">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt=""
            srcset=""
          />
        </div>
        <div class="prose fixed">
          <p class="overline">Overline Text</p>
          <h1>landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse. Nulla quis dolore minim magna do est consectetur
            eu anim aute.
          </p>
          <button class="btn">Call to Action</button>
        </div>
      </div>
    </main>
  </div>
`;

export const rightImageInverseHeader = (navbar) => html`
  <div class="cover cover-nav theme-dark">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="prose fixed">
          <p class="overline">Overline Text</p>
          <h1>landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse. Nulla quis dolore minim magna do est consectetur
            eu anim aute.
          </p>
          <button class="btn">Call to Action</button>
        </div>
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </main>
  </div>
`;

export const leftInverseHeader = (navbar) => html`
  <div class="cover cover-nav theme-dark">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle prose">
          <p class="overline">Overline Text</p>
          <h1>landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse. Nulla quis dolore minim magna do est consectetur
            eu anim aute.
          </p>
          <button class="btn">Call to Action</button>
        </div>
  </div>
`;

export const rightInverseHeader = (navbar) => html`
  <div class="cover cover-nav theme-dark">
    <header>${computeNavbar(navbar)}</header>
    <div class="principle stack align-end">
      <div class=" prose">
        <p class="overline">Overline Text</p>
        <h1>landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse. Nulla quis dolore minim magna do est consectetur eu anim aute.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
  </div>
`;

export const centerInverseHeader = (navbar) => html`
  <div class="cover cover-nav theme-dark">
    <header>${computeNavbar(navbar)}</header>
    <div class="principle center prose">
      <p class="overline">Overline Text</p>
      <h1>landing page title</h1>
      <p>
        Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit sunt
        cillum exercitation anim dolor voluptate. Sunt in eu exercitation
        pariatur elit. Quis magna enim ut id irure est. Magna laborum non fugiat
        aute est quis duis incididunt. Ad sint eiusmod sint tempor esse. Nulla
        quis dolore minim magna do est consectetur eu anim aute.
      </p>
      <button class="btn">Call to Action</button>
    </div>
  </div>
`;

// export const centerSimpleHeader = (navbar) => html``;
// export const centerImageHeader = (navbar) => html``;
// export const leftBgHeader = (navbar) => html``;
// export const rightBgHeader = (navbar) => html``;
// export const centerBgHeader = (navbar) => html``;
