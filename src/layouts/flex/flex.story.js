import { html } from "lit";

export default {
  title: "Layouts/Flex",
};

export const Default = () =>
  html`
    <div class="flex">
      <div class="employee-card">
        <img src="https://placehold.co/600x400" alt="{employee name}" />
        <h3>{employee name}</h3>
        <p>{employee title}</p>
        <p>{employee bio}</p>
      </div>
      <div class="employee-card">
        <img src="https://placehold.co/600x400" alt="{employee name}" />
        <h3>{employee name}</h3>
        <p>{employee title}</p>
        <p>{employee bio}</p>
      </div>
      <div class="employee-card">
        <img src="https://placehold.co/600x400" alt="{employee name}" />
        <h3>{employee name}</h3>
        <p>{employee title}</p>
        <p>{employee bio}</p>
      </div>
    </div>
  `;
