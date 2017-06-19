import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('badge');
    this.description = 'Basic status badges';
    this.dom = Dom;
  }
}
