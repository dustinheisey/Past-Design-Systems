import { html } from 'lit';
import './ds-bottombar.js';

export default {
    title: 'Components/Bottombar',
    component: 'ds-bottombar',
};

export const Default = () =>
    html`
        <ds-bottombar>
            <div slot="left-content">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div slot="center-content">
                <h1>Welcome to my website!</h1>
            </div>
            <div slot="right-content">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
            </div>
        </ds-bottombar>
    `;
