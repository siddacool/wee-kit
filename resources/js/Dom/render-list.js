function renderList(componentList) {
  return `
    <aside class="wee-sidebar">
      <ul class="wee-list-pill">
          ${componentList.map(component => `
            <li>
              <a href="#component-${component.id}" class="${component.active ? 'active' : ''} aside-anchor">${component.fieldName}</a>
            </li>
          `).join('')}
      </ul>
    </aside>
  `;
}

export default renderList;
