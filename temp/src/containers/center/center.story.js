import { html } from 'lit-element';

export default {
  title: 'Containers/Center',
  argTypes: {
    inset: {
      control: {
        type: 'select',
        options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl']
      }
    },
    maxInlineSize: {
      control: { type: 'text' }
    }
  }
};

export const Center = ({ inset, maxInlineSize }) => html`
  <div class="center" inset=${inset} style="--max-inline-size: ${maxInlineSize || '75ch'}">
    Wort ist zu nebelferne gut weiter gartens sanftes mut einz'ges du, du wilde deine so wort mutter
    helle. Da so sanken standest zurück. Verschwiegen treibt und lange zurück mal denkst, nacht
    stillestehn gut deine nun denkst schnee, nacht lachtet um dich so blieb sanft vom sonder, sanft
    weh still dich schnelle zürntest ich die, schmilzt immer du geträumt wo wie, in werden wangen
    der die darfst still sie gefärbt, brust deinen o ein mal nicht weiter es denkst. Komm da liebe
    einz'ges du freunde du schon um, vögel der im doch es brust liebe. Lachtet geschaut in weißt
    nebelferne gehn. Sanft werden lieb wiedersehn mund blieb warum perlet feuchten. Nicht der denkst
    dich lachtet die, zu in die geträumt niedlich in sehr.
  </div>
`;
