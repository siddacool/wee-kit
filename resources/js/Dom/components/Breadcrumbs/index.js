import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('breadcrumb');
    this.description = 'Basic breadcrumbs composed of anchor tags';
    this.dom = Dom;
  }
}
