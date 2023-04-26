import { html } from 'lit';

export default {
    title: 'Elements/Media/Audio',
};

export const Default = () => html`
    <audio controls>
        <source src="https://example.com/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
`;
