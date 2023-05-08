import { html } from "lit";

export const breadcrumb = html`
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="cluster gap-xs">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Section</a></li>
      <li aria-current="page"><a href="#" class="link">Subsection</a></li>
    </ol>
  </nav>
`;
