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

export const leftHero = (navbar) => html`
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
          <a href="/" class="badge badge-primary">News</a>
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

export const rightHero = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="prose fixed">
          <a href="/" class="badge badge-primary">News</a>
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

export const splitLeftHero = (navbar) => html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="stack">
      <header>${computeNavbar(navbar)}</header>
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt=""
        srcset=""
      />
    </div>
  </div>
`;

export const splitRightHero = (navbar) => html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt=""
        srcset=""
      />
    </div>
    <div class="stack">
      <header>${computeNavbar(navbar)}</header>
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
  </div>
`;

export const angledTopLeftHero = (navbar) => html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="stack">
      <header>${computeNavbar(navbar)}</header>
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
    <div class="frame photo fixed clip-top-left">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt=""
        srcset=""
      />
    </div>
  </div>
`;

export const angledTopRightHero = (navbar) => html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="frame photo fixed clip-top-right">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt=""
        srcset=""
      />
    </div>
    <div class="stack">
      <header>${computeNavbar(navbar)}</header>
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
  </div>
`;

export const angledBottomLeftHero = (navbar) => html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="stack">
      <header>${computeNavbar(navbar)}</header>
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
    <div class="frame photo fixed clip-bottom-left">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt=""
        srcset=""
      />
    </div>
  </div>
`;

export const angledBottomRightHero = (navbar) => html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="frame photo fixed clip-bottom-right">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt=""
        srcset=""
      />
    </div>
    <div class="stack">
      <header>${computeNavbar(navbar)}</header>
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
  </div>
`;

export const tiles2LeftHero = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="grid grid-2">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="stack fixed">
          <div class="prose">
            <a href="/" class="badge badge-primary">News</a>
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
      </div>
    </main>
  </div>
`;

export const tiles2RightHero = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="stack fixed">
          <div class="prose">
            <a href="/" class="badge badge-primary">News</a>
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
        <div class="grid grid-2">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </main>
  </div>
`;

export const tiles3LeftHero = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="grid grid-3">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="stack fixed">
          <div class="prose">
            <a href="/" class="badge badge-primary">News</a>
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
      </div>
    </main>
  </div>
`;

export const tiles3RightHero = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="stack fixed">
          <div class="prose">
            <a href="/" class="badge badge-primary">News</a>
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
        <div class="grid grid-3">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </main>
  </div>
`;

export const centerImageHero = (navbar) => html`
  <div class="cover cover-nav">
    <header>${computeNavbar(navbar)}</header>
    <main class="principle">
      <div class="prose fixed">
          <a href="/" class="badge badge-primary">News</a>
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
        <div class="frame full">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=400"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </main>
  </div>
`;

export const leftBgHero = (navbar) => html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=400"
      alt=""
      srcset=""
    />
    <div class="cover cover-nav">
      <header>${computeNavbar(navbar)}</header>
      <main class="principle">
        <div class="prose fixed">
            <a href="/" class="badge badge-primary">News</a>
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
  </div>
`;

export const centerBgHero = (navbar) => html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=400"
      alt=""
      srcset=""
    />
    <div class="cover cover-nav">
      <header>${computeNavbar(navbar)}</header>
      <main class="principle">
        <div class="prose fixed">
            <a href="/" class="badge badge-primary">News</a>
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
  </div>
`;

export const rightBgHero = (navbar) => html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=300"
      alt=""
      srcset=""
    />
    <div class="cover cover-nav">
      <header>${computeNavbar(navbar)}</header>
      <main class="principle">
        <div class="sidebar sidebar-split gap-m">
          <div class="prose fixed">
            <a href="/" class="badge badge-primary">News</a>
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
  </div>
`;

export const leftGradientHero = (navbar) => html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <header>${computeNavbar(navbar)}</header>
      <main class="principle">
        <div class="prose fixed">
            <a href="/" class="badge badge-primary">News</a>
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
  </div>
`;

export const centerGradientHero = (navbar) => html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <header>${computeNavbar(navbar)}</header>
      <main class="principle">
        <div class="prose fixed">
            <a href="/" class="badge badge-primary">News</a>
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
  </div>
`;

export const rightGradientHero = (navbar) => html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <header>${computeNavbar(navbar)}</header>
      <main class="principle">
        <div class="sidebar sidebar-split gap-m">
          <div class="prose fixed">
            <a href="/" class="badge badge-primary">News</a>
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
  </div>
`;

// export const centerSimpleHero = (navbar) => html``;
// export const centerImageHero = (navbar) => html``;
// export const leftBgHero = (navbar) => html``;
// export const rightBgHero = (navbar) => html``;
// export const centerBgHero = (navbar) => html``;
