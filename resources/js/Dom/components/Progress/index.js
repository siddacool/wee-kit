import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('progress');
    this.description = 'Progress bar';
    this.dom = Dom;
  }
}
