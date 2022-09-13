import { input_markup } from './input_markup';

export const Repeater = class {
  constructor(selectorString) {
    this.selectorString = selectorString;
  }

  $ = {
    selector: this.selectorString,
    el: document.querySelector('[data-repeater="tng-prop"]'),
    label: document.querySelector('[data-label="tng-label"]'),
    oldlabel: document.getElementsByClassName('toast-wrap'),
    inputMarkup: input_markup,
  };
  hasEl() {
    return typeof this.$.el !== 'undefined' || this.$.el !== null;
  }
  /**
   * eventually this needs to be more robust so that it can handle being passed
   * any markup or references to external templates and placed wherever
   * element is needed
   */
  updateLabel(pos, value, idx) {
    this.$.label.insertAdjacentHTML(
      pos,
      `<div class="toast-wrap relative mb-3"><div class="toast absolute top-0 left-0">
      <div class="alert alert-success shadow-lg mb-4" style="max-width: 52%">
        <div>
        ${this.$.inputMarkup}
          <h2 class="text-xxl font-bold uppercase">${value}.</h2>
        </div>
      </div>
    </div></div>`
    );
    console.log('len', this.$.label);
    console.log('el', this.$.el, this.$.oldlabel[0]);
    if (this.$.oldlabel.length > 1) {
      this.$.oldlabel[1].classList.add('hidden');
    }
  }
  htmlIn(pos, key, value) {
    //console.log('html in', this.$.selector);
    return this.hasEl()
      ? this.$.el.insertAdjacentHTML(
          pos,
          `<kbd class="kbd kbd-md mb-2">${key} <span class="text-secondary text-xl text-bolder pl-3">${value}</span></kbd>`
        )
      : '';
  }
};

//this.$.el.cloneNode(true).outerHTML
