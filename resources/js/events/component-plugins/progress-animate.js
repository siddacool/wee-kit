export default function () {
  const progress = document.querySelector('[data-id="wee-progress-animated"]');

  setTimeout(() => { 
    progress.addEventListener('mouseover', () => {
      const progressWidth = progress.querySelector('.progress-fill').style.width;
      progress.querySelector('.progress-fill').style.width = progressWidth =='10%' ? '70%' : '10%';
    });
  }, 500);
}
