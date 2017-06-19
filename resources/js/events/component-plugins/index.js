import selectActive from './select-active';
import progressAnimate from './progress-animate';
import tabAction from './tab-action';

document.addEventListener('DOMContentLoaded', () => {
  selectActive('wee-select');
  selectActive('wee-dropdown');
  progressAnimate();
  tabAction();
});
