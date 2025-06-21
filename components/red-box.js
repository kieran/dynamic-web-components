customElements.define(
  "red-box",
  class extends HTMLElement {
    connectedCallback() {
      console.log('a <red-box> has been created!')
    }
  }
);
