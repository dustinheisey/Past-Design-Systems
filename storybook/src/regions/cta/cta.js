import { html } from "lit";

export const simpleCta = html`
  <section class="cover cover-s">
    <div class="principle center-intrinsic prose">
      <h1 class="page-headline">Headline Text</h1>
      <p class="text-center">
        Tempor ad ullamco commodo velit. Sunt fugiat minim qui deserunt nulla
        deserunt id cupidatat qui aliqu.
      </p>
      <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address" /><a
          href="/"
          class="btn fixed"
          >Call to Action</a
        >
      </div>
    </div>
  </section>
`;

export const simpleLeftCta = html`
  <section class="cover justify-start cover-s">
    <div class="principle prose">
      <h1 class="page-headline">Headline Text</h1>
      <p>
        Tempor ad ullamco commodo velit. Sunt fugiat minim qui deserunt nulla
        deserunt id cupidatat qui aliqu.
      </p>
      <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address" /><a
          href="/"
          class="btn fixed"
          >Call to Action</a
        >
      </div>
    </div>
  </section>
`;

export const simpleRightCta = html`
  <section class="cover justify-end cover-s">
    <div class="principle prose text-end">
      <h1 class="page-headline">Headline Text</h1>
      <p>
        Tempor ad ullamco commodo velit. Sunt fugiat minim qui deserunt nulla
        deserunt id cupidatat qui aliqu.
      </p>
      <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address" /><a
          href="/"
          class="btn fixed"
          >Call to Action</a
        >
      </div>
    </div>
  </section>
`;

export const leftImageCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt="placeholder"
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
    </div>
  </div>
`;

export const rightImageCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  </div>
`;

export const splitLeftCta = html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="stack">
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
        alt="placeholder"
      />
    </div>
  </div>
`;

export const splitRightCta = html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
    </div>
    <div class="stack">
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

export const tiles2LeftCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="grid grid-2">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
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
    </div>
  </div>
`;

export const tiles2RightCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const tiles3LeftCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="grid grid-3">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
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
    </div>
  </div>
`;

export const tiles3RightCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const leftBgCta = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=400"
      alt="placeholder"
      
    />
    <div class="cover cover-nav">
      <div class="principle">
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
      </div>
    </div>
  </div>
`;

export const centerBgCta = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=400"
      alt="placeholder"
      
    />
    <div class="cover cover-nav">
      <div class="principle">
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
      </div>
    </div>
  </div>
`;

export const rightBgCta = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=300"
      alt="placeholder"
    />
    <div class="cover cover-nav">
      <div class="principle">
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
      </div>
    </div>
  </div>
`;

export const leftGradientCta = html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <div class="principle">
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
      </div>
    </div>
  </div>
`;

export const centerGradientCta = html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <div class="principle">
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
      </div>
    </div>
  </div>
`;

export const rightGradientCta = html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <div class="principle">
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
      </div>
    </div>
  </div>
`;

export const centerImageCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
            alt="placeholder"
            
          />
        </div>
      </div>
    </div>
  </div>
`;

export const justifiedCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar align-center gap-m">
        <div class="prose">
          <h1>landing page title</h1>
        </div>
        <button class="btn fixed">Call to Action</button>
      </div>
    </div>
  </div>
`;

export const simpleNewsletterCta = html`
  <section class="cover cover-s">
    <div class="principle center-intrinsic prose">
      <h1 class="page-headline">Headline Text</h1>
      <p class="text-center">
        Tempor ad ullamco commodo velit. Sunt fugiat minim qui deserunt nulla
        deserunt id cupidatat qui aliqu.
      </p>
      <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address" /><a
          href="/"
          class="btn fixed"
        >
          Call to Action
        </a>
      </div>
    </div>
  </section>
`;

export const simpleLeftNewsletterCta = html`
  <section class="cover justify-start cover-s">
    <div class="principle prose">
      <h1 class="page-headline">Headline Text</h1>
      <p>
        Tempor ad ullamco commodo velit. Sunt fugiat minim qui deserunt nulla
        deserunt id cupidatat qui aliqu.
      </p>
      <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address" /><a
          href="/"
          class="btn fixed"
        >
          Call to Action
        </a>
      </div>
    </div>
  </section>
`;

export const simpleRightNewsletterCta = html`
  <section class="cover justify-end cover-s">
    <div class="principle prose text-end">
      <h1 class="page-headline">Headline Text</h1>
      <p>
        Tempor ad ullamco commodo velit. Sunt fugiat minim qui deserunt nulla
        deserunt id cupidatat qui aliqu.
      </p>
      <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address" /><a
          href="/"
          class="btn fixed"
        >
          Call to Action
        </a>
      </div>
    </div>
  </section>
`;

export const leftImageNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar sidebar-split gap-m">
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt="placeholder"
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
          <div class="sidebar">
            <input class="input" type="email" placeholder="Email Address" /><a
              href="/"
              class="btn fixed"
            >
              Call to Action
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const rightImageNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
          <div class="sidebar">
            <input class="input" type="email" placeholder="Email Address" /><a
              href="/"
              class="btn fixed"
            >
              Call to Action
            </a>
          </div>
        </div>
        <div class="frame photo">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=300"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  </div>
`;

export const splitLeftNewsletterCta = html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="stack">
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <div class="sidebar">
          <input class="input" type="email" placeholder="Email Address" /><a
            href="/"
            class="btn fixed"
          >
            Call to Action
          </a>
        </div>
      </div>
    </div>
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
    </div>
  </div>
`;

export const splitRightNewsletterCta = html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
    </div>
    <div class="stack">
      <div class="prose auto">
        <h1 class="hero-headline">landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse.
        </p>
        <div class="sidebar">
          <input class="input" type="email" placeholder="Email Address" /><a
            href="/"
            class="btn fixed"
          >
            Call to Action
          </a>
        </div>
      </div>
    </div>
  </div>
`;

export const tiles2LeftNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="grid grid-2">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
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
            <div class="sidebar">
              <input class="input" type="email" placeholder="Email Address" /><a
                href="/"
                class="btn fixed"
              >
                Call to Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const tiles2RightNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
            <div class="sidebar">
              <input class="input" type="email" placeholder="Email Address" /><a
                href="/"
                class="btn fixed"
              >
                Call to Action
              </a>
            </div>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const tiles3LeftNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar sidebar-split gap-xl">
        <div class="grid grid-3">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
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
            <div class="sidebar">
              <input class="input" type="email" placeholder="Email Address" /><a
                href="/"
                class="btn fixed"
              >
                Call to Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const tiles3RightNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
            <div class="sidebar">
              <input class="input" type="email" placeholder="Email Address" /><a
                href="/"
                class="btn fixed"
              >
                Call to Action
              </a>
            </div>
          </div>
        </div>
        <div class="grid grid-3">
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
          <div class="frame square">
            <img
              src="https://generative-placeholders.glitch.me/image?width=600&height=300"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const leftBgNewsletterCta = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=400"
      alt="placeholder"
      
    />
    <div class="cover cover-nav">
      <div class="principle">
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
                  <div class="sidebar fixed">
        <input class="input" type="email" placeholder="Email Address"/><a href="/" class="btn fixed">
          Call to Action
        </a>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const centerBgNewsletterCta = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=400"
      alt="placeholder"
      
    />
    <div class="cover cover-nav">
      <div class="principle">
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
                  <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address"/><a href="/" class="btn fixed">
          Call to Action
        </a>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const rightBgNewsletterCta = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=300"
      alt="placeholder"
    />
    <div class="cover cover-nav">
      <div class="principle">
        <div class="sidebar sidebar-split gap-m">
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
            <div class="sidebar fixed">
              <input class="input" type="email" placeholder="Email Address" /><a
                href="/"
                class="btn fixed"
              >
                Call to Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const leftGradientNewsletterCta = html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <div class="principle">
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
                  <div class="sidebar fixed">
        <input class="input" type="email" placeholder="Email Address"/><a href="/" class="btn fixed">
          Call to Action
        </a>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const centerGradientNewsletterCta = html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <div class="principle">
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
                  <div class="sidebar">
        <input class="input" type="email" placeholder="Email Address"/><a href="/" class="btn fixed">
          Call to Action
        </a>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const rightGradientNewsletterCta = html`
  <div class="bg-gradient">
    <div class="cover cover-nav">
      <div class="principle">
        <div class="sidebar sidebar-split gap-m">
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
            <div class="sidebar fixed">
              <input class="input" type="email" placeholder="Email Address" /><a
                href="/"
                class="btn fixed"
              >
                Call to Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const centerImageNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
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
        <div class="sidebar">
            <input class="input" type="email" placeholder="Email Address"/>
            <a href="/" class="btn fixed">
                Call to Action
            </a>
      </div>
        </div>
        <div class="frame full">
          <img
            src="https://generative-placeholders.glitch.me/image?width=600&height=400"
            alt="placeholder"
            
          />
        </div>
      </div>
    </div>
  </div>
`;

export const justifiedNewsletterCta = html`
  <div class="cover cover-nav">
    <div class="principle">
      <div class="sidebar align-center gap-m">
        <div class="prose">
          <h1>landing page title</h1>
        </div>
        <div class="sidebar fixed">
          <input class="input" type="email" placeholder="Email Address" /><a
            href="/"
            class="btn fixed"
          >
            Call to Action
          </a>
        </div>
      </div>
    </div>
  </div>
`;
