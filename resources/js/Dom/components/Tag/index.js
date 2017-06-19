import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('tag');
    this.description = 'Basic tag element';
    this.dom = Dom;
  }
}
