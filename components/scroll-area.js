import { prepairClasses, nano } from "../modules/helpers";

export default class ScrollArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let color = this.hasAttribute('color') ? nano + this.getAttribute('color') : 'silver';
    let vertical = this.getAttribute('vertical') === 'false' ? nano + 'no-vertical' : '';
    let horizontal = this.getAttribute('horizontal') === 'false' ? nano + 'no-horizontal' : '';

    let classes = prepairClasses([
      color,
      vertical,
      horizontal,
      this.className,
    ]);
    this.className = classes;
  }
}