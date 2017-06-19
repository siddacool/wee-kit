import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('pagination');
    this.description = 'Basic pagination composed of anchor tags';
    this.dom = Dom;
  }
}
