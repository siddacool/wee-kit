document.addEventListener('DOMContentLoaded', () => {
  const componentSubHolder = document.querySelectorAll('.component-sub-holder');
  const aside = document.querySelector('aside');
  const componentRep = aside.querySelectorAll('a');

  const str = window.location.href;

  const activeAsideItem = (thisRep) => {
    const curruntItem = document.querySelector(`[href="${thisRep}"]`);
    componentRep.forEach((rep) => {
      rep.classList.remove('active');
    });
    curruntItem.classList.add('active');
  };

  const activeComponentDescription = (target) => {
    const targetHolder = document.querySelector(target);

    componentSubHolder.forEach((holder) => {
      holder.classList.remove('show');
    });

    targetHolder.classList.add('show');
  };

  const openTab = (href) => {
    activeAsideItem(href);
    activeComponentDescription(href);
  };

  componentRep.forEach((rep) => {
    rep.addEventListener('click', () => {
      openTab(rep.getAttribute('href'));
    });
  });

  if (str.includes('#component-')) {
    const link = str.substr(str.indexOf('#'));
    openTab(link);
  }
});
