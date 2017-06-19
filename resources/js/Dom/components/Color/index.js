import BaseComponent from '../base-component';
import makeColor from './make-color';

export default class extends BaseComponent {
  constructor() {
    super('color');
    this.fieldName = 'Colors';
    this.description = 'Complete color theory of the ui kit';
    this.dom = makeColor();
  }
}
