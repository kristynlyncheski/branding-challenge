document.addEventListener('DOMContentLoaded', function () {

  let boxes = document.querySelectorAll('.content-top .box');
  let contentBottom = document.querySelector('.content-bottom');

  let plans = {
    1: {
      name: 'basic',
      percentages: [5, 5, 5]
    },
    2: {
      name: 'pro',
      percentages: [20, 80, 50]
    },
    3: {
      name: 'premium',
      percentages: [100, 100, 100]
    }
  }

  if (boxes.length > 0) {
    for (let i = 0; i < boxes.length; i++) {

      // add class to bottom wrapper
      boxes[i].addEventListener('mouseenter', () => {
        contentBottom.classList.add('selection-' + plans[i + 1].name)
      });

      // remove class to bottom wrapper
      boxes[i].addEventListener('mouseleave', () => {
        contentBottom.classList.remove('selection-' + plans[i + 1].name)
      });
    }
  }
});
