import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('tooltip');
    this.description = 'Basic tooltip';
    this.dom = Dom;
  }
}
