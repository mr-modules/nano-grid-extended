import { prepairClasses, validateProp, nano, cleanNano } from "../modules/helpers";
import { directionsType } from "../modules/types";

export default class Icon extends HTMLElement {
  constructor() {
    super();
  }

  updateClasses() {
    const glyph = this.hasAttribute('glyph') ? nano + this.getAttribute('glyph') : '';
    const direction = validateProp('nn-icon', 'direction', this.getAttribute('direction'), directionsType, 'down');
    
    this.className = "";
    const classes = prepairClasses([
      glyph,
      direction,
    ]);
    this.className = classes;
  }

  connectedCallback() {
    this.updateClasses();
  }

  static get observedAttributes() {
    return ['glyph'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'glyph') {
      this.updateClasses();
    }
  }
}