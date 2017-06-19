class Catalog {
  constructor() {
    this.list = [];
  }

  demand() {
    return this.list;
  }

  add(Component) {
    this.list.push(new Component());
  }
}

export default Catalog;
