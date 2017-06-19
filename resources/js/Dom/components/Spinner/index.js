import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('spinner');
    this.description = 'Animated loading icon';
    this.dom = Dom;
  }
}
