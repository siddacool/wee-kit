function renderDom(componentList) {
  return `
    <main class="components-holder">
    ${componentList.map(component => `
      <div class="component-sub-holder ${component.active ? 'show' : ''}" id="component-${component.id}">
        <section>
          <div class="head-section">
            <h1 class="wee-heading wee-heading--h900">${component.fieldName}<h1>
            <p class="wee-heading wee-heading--description">${component.description}</p>
          </div>
          <div class="ui-section">
            ${component.dom}
          </div>
        </section>
      </div>
    `).join('')}
    </main>
  `;
}

export default renderDom;
