import { html } from 'lit-element';

export default {
  title: 'Containers/Grid',
  argTypes: {
    inset: {
      control: {
        type: 'select',
        options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl']
      }
    },
    gap: {
      control: {
        type: 'select',
        options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl']
      }
    }
  }
};

export const Grid = ({ inset, gap }) => html`
  <div class="grid" inset="${inset}" gap="${gap}">
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
    <p>
      Eirmod no et gubergren sit at, ea sed dolore magna rebum aliquyam sadipscing et kasd, et erat
      amet rebum dolores accusam amet, gubergren et sadipscing sea consetetur. Magna rebum amet
      lorem clita et no dolore. Magna accusam no ea rebum nonumy stet ipsum dolor tempor. Ut rebum
      takimata voluptua lorem..
    </p>
  </div>
`;
