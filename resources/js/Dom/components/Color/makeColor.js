import pallet from './pallet';

function renderColorHeader(type, name, hex) {
  return `
    <div>
      ${type}
      ${name}
      ${hex}
    <div>
  `;
}

function renderColorProps(type, palletArr) {
  return `
  <div>
    ${type} 
    ${palletArr.map(arr => `
      <div>${arr}</div>
    `).join('')}
    <div>
  `;
}

function loopPallet() {
  const palletHead = [];

  for (const key in pallet) {
    const palletHead2 = [];

    for (const key2 in pallet[key]) {
      palletHead2.push(renderColorHeader(key, key2, pallet[key][key2]));
    }

    palletHead.push(renderColorProps(key, palletHead2));
  }

  return palletHead;
}

export default loopPallet;
