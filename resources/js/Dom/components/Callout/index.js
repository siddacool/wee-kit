import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('callout');
    this.fieldName = 'Callouts';
    this.description = 'Basic Callouts to emphasize text';
    this.dom = Dom;
  }
}
