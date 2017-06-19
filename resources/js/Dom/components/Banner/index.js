import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('banner');
    this.fieldName = 'Banners';
    this.description = 'Basic warining banners';
    this.dom = Dom;
  }
}
