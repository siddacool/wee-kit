function renderDom(componentList) {
  return `
    <main class="components-holder">
    ${componentList.map(component => `
      <div class="component-sub-holder ${component.active ? 'show' : ''}" id="component-${component.id}">
        <section>
          <div class="wee-row">
            <div class="wee-col wee-col--12 wee-col--no-gutters">
              <div class="head-section">
                 <div class="wee-row">
                  <div class="wee-col wee-col--no-gutters wee-col--12">
                    <h1 class="wee-heading wee-heading--h900">${component.fieldName}<h1>
                  </div>
                  <div class="wee-col wee-col--no-gutters wee-col--12">
                    <p class="wee-heading wee-heading--description">${component.description}</p>
                  </div>
                 </div>
              </div>
            </div>
            <div class="wee-col wee-col--12">
              <div class="ui-section">
                ${component.dom}
              </div>
            </div>
          </div>
        </section>
      </div>
    `).join('')}
    </main>
  `;
}

export default renderDom;
