import { html } from 'lit';

export default {
    title: 'Elements/Multimedia',
    tags: ['autodocs'],
};

export const Area = () =>
    html`< map name = "workmap" > <area shape="rect" coords="0,0,100,100" href="#" alt="Work" /> </> <img src="planets.gif" usemap="#workmap" alt="Planets" />`;

export const Audio = () =>
    html`<audio controls>
        <source src="music.mp3" type="audio/mpeg" />
        <source src="music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
    </audio>`;

export const Img = () => html`<img
    src="https://www.w3schools.com/w3images/fjords.jpg"
    alt="Fjords"
    style="width:auto;"
/>`;

export const Svg = () => html`
    <svg
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        stroke="red"
        fill="grey"
    >
        <circle cx="50" cy="50" r="40" />
        <circle cx="150" cy="50" r="4" />

        <svg viewBox="0 0 10 10" x="200" width="100">
            <circle cx="5" cy="5" r="4" />
        </svg>
    </svg>
`;

export const Map = () =>
    html`<map name="workmap">
            <area shape="rect" coords="0,0,100,100" href="#" alt="Work" />
        </map>
        <img src="planets.gif" usemap="#workmap" alt="Planets" />`;

export const Track = () =>
    html`<audio controls>
        <source src="music.mp3" type="audio/mpeg" />
        <source src="music.ogg" type="audio/ogg" />
        <track src="music.vtt" kind="subtitles" srclang="en" label="English" />
        Your browser does not support the audio element.
    </audio>`;

export const Picture = () =>
    html`<picture>
        <source
            media="(min-width: 650px)"
            srcset="https://www.w3schools.com/w3images/forest.jpg"
        />
        <source
            media="(min-width: 465px)"
            srcset="https://www.w3schools.com/w3images/forest.jpg"
        />
        <img
            src="https://www.w3schools.com/w3images/fjords.jpg"
            alt="Fjords"
            style="width:auto;"
        />
    </picture>`;

export const Video = () =>
    html`<video width="320" height="240" controls>
        <source
            src="https://www.w3schools.com/tags/movie.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>`;

export const Iframe = () => html`
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jfKfPfyJRdk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
`;