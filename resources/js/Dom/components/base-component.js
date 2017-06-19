import Capitalize from '../../custom-functions/capitalize';

export default class {
  constructor(name) {
    this.name = name;
    this.id = `wee-${this.name}`;
    this.fieldName = `${Capitalize(this.name)}`;
    this.description = ':P';
    this.active = false;
    this.dom = 'de nada !';
  }
}
