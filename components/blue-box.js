customElements.define(
  "blue-box",
  class extends HTMLElement {
    connectedCallback() {
      console.log('a <blue-box> has been created!')
    }
  }
);
