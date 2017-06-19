export default function () {
  const tab = document.querySelector('[data-id="wee-tab-action"]');
  const tabPill = tab.querySelectorAll('a');

  function clearTabs() {
    for (let i = 0; i < tabPill.length; i++) {
      const target = document.querySelector(tabPill[i].getAttribute('href'));

      target.style.display = 'none';
      tabPill[i].classList.remove('active');
    }
  }

  for (let i = 0; i < tabPill.length; i++) {
    tabPill[i].addEventListener('click', () => {
      const target = document.querySelector(tabPill[i].getAttribute('href'));
      clearTabs();
      target.style.display = '';
      tabPill[i].classList.add('active');
    });
  }
}
