import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('avatar');
    this.description = 'User profile icons';
    this.dom = Dom;
  }
}
