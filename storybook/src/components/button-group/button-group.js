import { html } from "lit";

export const start = html`
  <div class="cluster full">
    <a class="btn" href="#">Primary Action</a>
    <a class="btn btn-secondary" href="#">Secondary Action</a>
  </div>
`;

export const center = html`
  <div class="cluster justify-center full">
    <a class="btn" href="#">Primary Action</a>
    <a class="btn btn-secondary" href="#">Secondary Action</a>
  </div>
`;

export const end = html`
  <div class="cluster justify-end full">
    <a class="btn btn-secondary" href="#">Secondary Action</a>
    <a class="btn" href="#">Primary Action</a>
  </div>
`;

export const tertiaryStart = html`
  <div class="cluster full">
    <a class="btn" href="#">Primary Action</a>
    <a class="btn btn-tertiary" href="#">Tertiary Action</a>
  </div>
`;

export const tertiaryCenter = html`
  <div class="cluster justify-center full">
    <a class="btn" href="#">Primary Action</a>
    <a class="btn btn-tertiary" href="#">Tertiary Action</a>
  </div>
`;

export const tertiaryEnd = html`
  <div class="cluster justify-end full">
    <a class="btn btn-tertiary" href="#">Tertiary Action</a>
    <a class="btn" href="#">Primary Action</a>
  </div>
`;

export const tertiaryStartArrows = html`
  <div class="cluster full">
    <a class="btn" href="#">Primary Action</a>
    <a class="btn btn-tertiary" href="#"
      >Tertiary Action
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#arrow-sm-right"></use></svg
    ></a>
  </div>
`;

export const tertiaryCenterArrows = html`
  <div class="cluster justify-center full">
    <a class="btn" href="#">Primary Action</a>
    <a class="btn btn-tertiary" href="#"
      >Tertiary Action
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#arrow-sm-right"></use></svg
    ></a>
  </div>
`;

export const tertiaryEndArrows = html`
  <div class="cluster justify-end full">
    <a class="btn btn-tertiary" href="#"
      ><svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#arrow-sm-left"></use>
      </svg>
      Tertiary Action
    </a>
    <a class="btn" href="#">Primary Action</a>
  </div>
`;
