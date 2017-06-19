import pallet from './pallet';
import Capitalize from '../../../custom-functions/capitalize';
import FirstChar from '../../../custom-functions/first-char';
import HexToRgb from '../../../custom-functions/hex-to-rgb';

function renderCardProps(props, colorType) {
  return `
    <div class="color-props">
      <table>
        ${props.map(component => `
          <tr>
            <td>
              <span class="color-props-pill" style="background-color:${component.value}">
              </span>
              <span class="color-props-name wee-heading wee-heading--h500">
                ${FirstChar(Capitalize(colorType))}${component.name}
              </span>
            </td>
            <td>
              <span class="color-props-hex wee-heading wee-heading--h500">
                ${component.value}
              </span>
            </td>
            <td>
              <span class="color-props-rgb wee-heading wee-heading--h500">
                ${HexToRgb(component.value)}
              </span>
            </td>
          </tr>
        `).join('')}
      </table>
    </div>
  `;
}

function renderColorPallet(obj, colorType) {
  const color = [];

  for (const key of Object.keys(obj)) {
    color.push({
      name: key,
      value: obj[key],
    });
  }

  const render = `
    <div class="component-variations-color">
      <span class="wee-heading wee-heading--h600">
        ${Capitalize(colorType)}
      </span>
      ${renderCardProps(color.reverse(), colorType)}
    </div>
  `;

  return render;
}

function loopColorTypes() {
  const colorTypes = [];

  for (const key of Object.keys(pallet)) {
    colorTypes.push(renderColorPallet(pallet[key], key));
  }

  return colorTypes;
}

function makeColor() {
  return `
    ${loopColorTypes().join('')}
  `;
}

export default makeColor;
