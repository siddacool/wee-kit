import Components from './components/';
import Catalog from './Catalog';
import renderList from './render-list';
import renderDom from './render-dom';

const wrapper = document.getElementById('wrapper');
const catalog = new Catalog();
const demand = catalog.demand();

Components(catalog);

wrapper.innerHTML = `
  ${renderList(demand)}
  ${renderDom(demand)}
`;

