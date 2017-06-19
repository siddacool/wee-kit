import BaseComponent from '../base-component';
import loopPallet from './makeColor';

export default class extends BaseComponent {
  constructor() {
    super('color');
    this.fieldName = 'Colors';
    this.description = 'Complete color theory of the ui kit';
    this.dom = `
        ${loopPallet().map(component => `
        <div>${component}</div>
    `).join('')}
    `;
  }
}
