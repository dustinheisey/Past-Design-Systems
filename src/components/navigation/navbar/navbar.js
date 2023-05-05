import { html } from "lit";
import "../../input/dark-mode/dark-mode.js";

export const centered = html`
  <nav class="cluster justify-center">
    <a href="/">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 245.68853462923755"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g
          transform="translate(-115.63253553302764 -42.78994260579158) scale(3.31268381930163)"
          id="containerlessSvgTemplate"
        >
          <g fill="var(--color-primary)">
            <path
              d="M34.906 43.386c0 16.385 6.098 29.357 14.062 30.395v12.302a1 1 0 0 0 2 0V73.791c7.995-.978 14.125-13.977 14.125-30.404 0-17.086-6.63-30.47-15.094-30.47-8.463 0-15.093 13.384-15.093 30.469zm28.188 0c0 14.724-5.459 27.259-12.125 28.38V51.511l5.357-5.357a.999.999 0 1 0-1.414-1.414l-3.943 3.943V32.229a1 1 0 0 0-2 0v8.743l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v15.605l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v9.522c-6.637-1.188-12.062-13.691-12.062-28.369 0-15.432 5.996-28.47 13.093-28.47 7.097.003 13.094 13.04 13.094 28.472z"
            ></path>
          </g>
        </g>
      </svg>
    </a>
    <ul class="cluster gap-m">
      <li>
        <a href="/" class="link link-navigation">Home</a>
      </li>
      <li>
        <a href="/about" class="link link-navigation">About</a>
      </li>
      <drop-down>
        <a href="/" class="link link-navigation">Services</a>
        <ul>
          <li>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
          </li>
        </ul>
      </drop-down>
      <li>
        <a href="/portfolio" class="link link-navigation">Portfolio</a>
      </li>
    </ul>
    <div class="cluster gap-xs">
      <nds-dark-mode></nds-dark-mode>
      <a href="/start-a-project" class="btn">Start a Project</a>
    </div>
  </nav>
`;

export const spaced = html`
  <nav class="cluster justify-between">
    <a href="/">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 245.68853462923755"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g
          transform="translate(-115.63253553302764 -42.78994260579158) scale(3.31268381930163)"
          id="containerlessSvgTemplate"
        >
          <g fill="var(--color-primary)">
            <path
              d="M34.906 43.386c0 16.385 6.098 29.357 14.062 30.395v12.302a1 1 0 0 0 2 0V73.791c7.995-.978 14.125-13.977 14.125-30.404 0-17.086-6.63-30.47-15.094-30.47-8.463 0-15.093 13.384-15.093 30.469zm28.188 0c0 14.724-5.459 27.259-12.125 28.38V51.511l5.357-5.357a.999.999 0 1 0-1.414-1.414l-3.943 3.943V32.229a1 1 0 0 0-2 0v8.743l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v15.605l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v9.522c-6.637-1.188-12.062-13.691-12.062-28.369 0-15.432 5.996-28.47 13.093-28.47 7.097.003 13.094 13.04 13.094 28.472z"
            ></path>
          </g>
        </g>
      </svg>
    </a>
    <ul class="cluster gap-m">
      <li>
        <a href="/" class="link link-navigation">Home</a>
      </li>
      <li>
        <a href="/about" class="link link-navigation">About</a>
      </li>
      <drop-down>
        <a href="/" class="link link-navigation">Services</a>
        <ul>
          <li>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
          </li>
        </ul>
      </drop-down>
      <li>
        <a href="/portfolio" class="link link-navigation">Portfolio</a>
      </li>
    </ul>
    <div class="cluster gap-xs">
      <nds-dark-mode></nds-dark-mode>
      <a href="/start-a-project" class="btn">Start a Project</a>
    </div>
  </nav>
`;

export const start = html`
  <nav class="cluster justify-start">
    <a href="/">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 245.68853462923755"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g
          transform="translate(-115.63253553302764 -42.78994260579158) scale(3.31268381930163)"
          id="containerlessSvgTemplate"
        >
          <g fill="var(--color-primary)">
            <path
              d="M34.906 43.386c0 16.385 6.098 29.357 14.062 30.395v12.302a1 1 0 0 0 2 0V73.791c7.995-.978 14.125-13.977 14.125-30.404 0-17.086-6.63-30.47-15.094-30.47-8.463 0-15.093 13.384-15.093 30.469zm28.188 0c0 14.724-5.459 27.259-12.125 28.38V51.511l5.357-5.357a.999.999 0 1 0-1.414-1.414l-3.943 3.943V32.229a1 1 0 0 0-2 0v8.743l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v15.605l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v9.522c-6.637-1.188-12.062-13.691-12.062-28.369 0-15.432 5.996-28.47 13.093-28.47 7.097.003 13.094 13.04 13.094 28.472z"
            ></path>
          </g>
        </g>
      </svg>
    </a>
    <ul class="cluster gap-m">
      <li>
        <a href="/" class="link link-navigation">Home</a>
      </li>
      <li>
        <a href="/about" class="link link-navigation">About</a>
      </li>
      <drop-down>
        <a href="/" class="link link-navigation">Services</a>
        <ul>
          <li>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
          </li>
        </ul>
      </drop-down>
      <li>
        <a href="/portfolio" class="link link-navigation">Portfolio</a>
      </li>
    </ul>
    <div class="cluster gap-xs">
      <nds-dark-mode></nds-dark-mode>
      <a href="/start-a-project" class="btn">Start a Project</a>
    </div>
  </nav>
`;

export const end = html`
  <nav class="cluster justify-end">
    <a href="/">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 245.68853462923755"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g
          transform="translate(-115.63253553302764 -42.78994260579158) scale(3.31268381930163)"
          id="containerlessSvgTemplate"
        >
          <g fill="var(--color-primary)">
            <path
              d="M34.906 43.386c0 16.385 6.098 29.357 14.062 30.395v12.302a1 1 0 0 0 2 0V73.791c7.995-.978 14.125-13.977 14.125-30.404 0-17.086-6.63-30.47-15.094-30.47-8.463 0-15.093 13.384-15.093 30.469zm28.188 0c0 14.724-5.459 27.259-12.125 28.38V51.511l5.357-5.357a.999.999 0 1 0-1.414-1.414l-3.943 3.943V32.229a1 1 0 0 0-2 0v8.743l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v15.605l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v9.522c-6.637-1.188-12.062-13.691-12.062-28.369 0-15.432 5.996-28.47 13.093-28.47 7.097.003 13.094 13.04 13.094 28.472z"
            ></path>
          </g>
        </g>
      </svg>
    </a>
    <ul class="cluster gap-m">
      <li>
        <a href="/" class="link link-navigation">Home</a>
      </li>
      <li>
        <a href="/about" class="link link-navigation">About</a>
      </li>
      <drop-down>
        <a href="/" class="link link-navigation">Services</a>
        <ul>
          <li>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
            <a href="/services/service" class="link link-navigation">Service</a>
          </li>
        </ul>
      </drop-down>
      <li>
        <a href="/portfolio" class="link link-navigation">Portfolio</a>
      </li>
    </ul>
    <div class="cluster gap-xs">
      <nds-dark-mode></nds-dark-mode>
      <a href="/start-a-project" class="btn">Start a Project</a>
    </div>
  </nav>
`;

export const stacked = html`
  <nav class="cluster center-intrinsic stack gap-xs">
    <a href="/">
      <svg
        class="logo-l"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 245.68853462923755"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g
          transform="translate(-115.63253553302764 -42.78994260579158) scale(3.31268381930163)"
          id="containerlessSvgTemplate"
        >
          <g fill="var(--color-primary)">
            <path
              d="M34.906 43.386c0 16.385 6.098 29.357 14.062 30.395v12.302a1 1 0 0 0 2 0V73.791c7.995-.978 14.125-13.977 14.125-30.404 0-17.086-6.63-30.47-15.094-30.47-8.463 0-15.093 13.384-15.093 30.469zm28.188 0c0 14.724-5.459 27.259-12.125 28.38V51.511l5.357-5.357a.999.999 0 1 0-1.414-1.414l-3.943 3.943V32.229a1 1 0 0 0-2 0v8.743l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v15.605l-4.151-4.151a.999.999 0 1 0-1.414 1.414l5.565 5.564v9.522c-6.637-1.188-12.062-13.691-12.062-28.369 0-15.432 5.996-28.47 13.093-28.47 7.097.003 13.094 13.04 13.094 28.472z"
            ></path>
          </g>
        </g>
      </svg>
    </a>
    <div class="cluster gap-xl">
      <ul class="cluster gap-m">
        <li>
          <a href="/" class="link link-navigation">Home</a>
        </li>
        <li>
          <a href="/about" class="link link-navigation">About</a>
        </li>
        <li>
          <a href="/services" class="link link-navigation">Services</a>
        </li>
        <li>
          <a href="/portfolio" class="link link-navigation">Portfolio</a>
        </li>
      </ul>
      <div class="cluster gap-xs">
        <nds-dark-mode></nds-dark-mode>
        <a href="/start-a-project" class="btn">Start a Project</a>
      </div>
    </div>
  </nav>
`;
