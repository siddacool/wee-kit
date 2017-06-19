import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('lozenge');
    this.description = 'Basic lozenge warning badge';
    this.dom = Dom;
  }
}
