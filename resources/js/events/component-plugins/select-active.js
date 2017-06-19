export default function (target) {
  const targetAll = document.querySelectorAll(`.${target}`);
  for (let i = 0; i < targetAll.length; i++) {
    const select = targetAll[i].querySelector('.select');

    select.addEventListener('click', () => {
      targetAll[i].classList.toggle(`${target}--active`);
    });
  }
}
