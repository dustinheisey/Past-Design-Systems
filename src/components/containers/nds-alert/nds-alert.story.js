import { html } from "lit";
import "./nds-alert.js";

export default {
  title: "Components/Containers/Alert",
  component: "ds-alert",
};

export const Default = () =>
  html`<nds-alert message="This is a default alert."></nds-alert>`;

export const Success = () =>
  html`<nds-alert
    message="This is a success alert."
    type="success"
  ></nds-alert>`;

export const Warning = () =>
  html`<nds-alert
    message="This is a warning alert."
    type="warning"
  ></nds-alert>`;

export const Error = () =>
  html`<nds-alert message="This is an error alert." type="error"></nds-alert>`;
