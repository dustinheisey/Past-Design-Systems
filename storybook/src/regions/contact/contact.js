import { html } from "lit";

export const centeredContact = html`
  <script>
    const budgetInput = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    budgetInput.addEventListener("input", function () {
      budgetValue.textContent = "$" + budgetInput.value;
    });
  </script>
  <div class="center stack">
    <section class="prose">
      <p class="overline">Overline Text</p>
      <h2 class="region-headline">Apply to Work With Me</h2>
      <p>
        Fill out the application below, and let's make a difference together.
      </p>
    </section>
    <form class="stack gap-s">
      <label for="full_name">
        <span class="required">Full Name</span>
        <input
          type="text"
          id="full_name"
          name="full_name"
          class="input"
          required
        />
      </label>
      <label for="email">
        <span class="required">Email</span>
        <input type="email" id="email" name="email" class="input" required />
      </label>
      <label for="organization_description">
        <span class="required">Describe Your Organization</span>
        <textarea
          id="organization_description"
          name="organization_description"
          required
        ></textarea>
      </label>
      <fieldset class="cards">
        <legend>
          <span class="required">What Services Are You Interested In?</span>
        </legend>
        <label class="input-card">
          <input type="checkbox" />
          <span>
            <svg focusable="false">
              <use
                xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
              ></use>
            </svg>
            Web Design & Development
          </span>
        </label>
        <label class="input-card">
          <input type="checkbox" />
          <span>
            <svg focusable="false">
              <use
                xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
              ></use>
            </svg>
            Web Design & Development
          </span>
        </label>
        <label class="input-card">
          <input type="checkbox" />
          <span>
            <svg focusable="false">
              <use
                xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
              ></use>
            </svg>
            Web Design & Development
          </span>
        </label>
      </fieldset>
      <label for="budget">
        <span class="required">Budget</span>
        <div class="inline" gap="2xs">
          <input
            type="range"
            id="budget"
            name="budget"
            min="500"
            max="10000"
            step="500"
            value="500"
            required
          />
          <output id="budget-value">$500</output>
        </div>
      </label>
      <button type="submit" class="btn">Send Application</button>
    </form>
  </div>
`;

export const splitLeftContact = html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="stack center">
      <section class="prose">
        <p class="overline">Overline Text</p>
        <h2 class="region-headline">Apply to Work With Me</h2>
        <p>
          Fill out the application below, and let's make a difference together.
        </p>
      </section>
      <form class="stack gap-s">
        <label for="full_name">
          <span class="required">Full Name</span>
          <input
            type="text"
            id="full_name"
            name="full_name"
            class="input"
            required
          />
        </label>
        <label for="email">
          <span class="required">Email</span>
          <input type="email" id="email" name="email" class="input" required />
        </label>
        <label for="organization_description">
          <span class="required">Describe Your Organization</span>
          <textarea
            id="organization_description"
            name="organization_description"
            required
          ></textarea>
        </label>
        <fieldset class="cards">
          <legend>
            <span class="required">What Services Are You Interested In?</span>
          </legend>
          <label class="input-card">
            <input type="checkbox" />
            <span>
              <svg focusable="false">
                <use
                  xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
                ></use>
              </svg>
              Web Design & Development
            </span>
          </label>
          <label class="input-card">
            <input type="checkbox" />
            <span>
              <svg focusable="false">
                <use
                  xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
                ></use>
              </svg>
              Web Design & Development
            </span>
          </label>
          <label class="input-card">
            <input type="checkbox" />
            <span>
              <svg focusable="false">
                <use
                  xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
                ></use>
              </svg>
              Web Design & Development
            </span>
          </label>
        </fieldset>
        <label for="budget">
          <span class="required">Budget</span>
          <div class="inline" gap="2xs">
            <input
              type="range"
              id="budget"
              name="budget"
              min="500"
              max="10000"
              step="500"
              value="500"
              required
            />
            <output id="budget-value">$500</output>
          </div>
        </label>
        <button type="submit" class="btn">Send Application</button>
      </form>
    </div>
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
    </div>
  </div>
`;

export const splitRightContact = html`
  <div class="cover sidebar sidebar-split gap-m">
    <div class="frame photo fixed">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
    </div>
    <div class="stack center">
      <section class="prose">
        <p class="overline">Overline Text</p>
        <h2 class="region-headline">Apply to Work With Me</h2>
        <p>
          Fill out the application below, and let's make a difference together.
        </p>
      </section>
      <form class="stack gap-s">
        <label for="full_name">
          <span class="required">Full Name</span>
          <input
            type="text"
            id="full_name"
            name="full_name"
            class="input"
            required
          />
        </label>
        <label for="email">
          <span class="required">Email</span>
          <input type="email" id="email" name="email" class="input" required />
        </label>
        <label for="organization_description">
          <span class="required">Describe Your Organization</span>
          <textarea
            id="organization_description"
            name="organization_description"
            required
          ></textarea>
        </label>
        <fieldset class="cards">
          <legend>
            <span class="required">What Services Are You Interested In?</span>
          </legend>
          <label class="input-card">
            <input type="checkbox" />
            <span>
              <svg focusable="false">
                <use
                  xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
                ></use>
              </svg>
              Web Design & Development
            </span>
          </label>
          <label class="input-card">
            <input type="checkbox" />
            <span>
              <svg focusable="false">
                <use
                  xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
                ></use>
              </svg>
              Web Design & Development
            </span>
          </label>
          <label class="input-card">
            <input type="checkbox" />
            <span>
              <svg focusable="false">
                <use
                  xlink:href="src/elements/text/icon/icons.svg#edit-note-2"
                ></use>
              </svg>
              Web Design & Development
            </span>
          </label>
        </fieldset>
        <label for="budget">
          <span class="required">Budget</span>
          <div class="inline" gap="2xs">
            <input
              type="range"
              id="budget"
              name="budget"
              min="500"
              max="10000"
              step="500"
              value="500"
              required
            />
            <output id="budget-value">$500</output>
          </div>
        </label>
        <button type="submit" class="btn">Send Application</button>
      </form>
    </div>
  </div>
`;
