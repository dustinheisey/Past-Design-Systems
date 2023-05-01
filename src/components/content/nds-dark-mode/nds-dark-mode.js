// import { LitElement, html, css } from "lit-element";
// import { query } from "lit/decorators/query.js";

// const toggle = @query('#color_mode_toggle');
// const htmlElement = document.querySelector("html");
// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// let currentTheme = localStorage.getItem("theme");

// // Set theme based on localStorage or prefers-color-scheme
// if (!currentTheme) {
//   currentTheme = prefersDark ? "dark" : "light";
//   localStorage.setItem("theme", currentTheme);
// }
// htmlElement.setAttribute("data-theme", currentTheme);
// toggle.checked = currentTheme === "light";

// // Toggle theme when user clicks the toggle button
// toggle.addEventListener("change", () => {
//   const newTheme = toggle.checked ? "light" : "dark";
//   htmlElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);
// });

// // Listen for changes to prefers-color-scheme
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (e) => {
//     if (currentTheme === "system") return;
//     const newTheme = e.matches ? "dark" : "light";
//     htmlElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   });

// class DarkMode extends LitElement {
//   static get styles() {
//     return css``;
//   }

//   render() {
//     return html`
//       <label for="color_mode_toggle">
//         <input type="checkbox" id="color_mode_toggle" />
//         <span class="sun">
//           <svg focusable="false" class="icon">
//             <use href="assets/icons.svg#sun" />
//           </svg>
//           <span class="sr-only">Light Mode</span>
//         </span>
//         <span class="moon">
//           <svg focusable="false" class="icon">
//             <use href="assets/icons.svg#moon" />
//           </svg>
//           <span class="sr-only">Dark Mode</span>
//         </span>
//       </label>
//     `;
//   }
// }

// customElements.define("nds-dark-mode", DarkMode);
