// Header logo & switch
let btn = document.getElementById('btn')
let toggleBtnHome = document.getElementById('toggleBtnHome')
let toggleBtnOffice = document.getElementById('toggleBtnOffice')

function leftClick() {
  btn.style.left = '2px'
  btn.style.width = '55px'
  toggleBtnHome.style.color = '#fff'
  toggleBtnOffice.style.color = '#636C81'
}

function rightClick() {
  btn.style.left = '61px'
  btn.style.width = '66px'
  toggleBtnHome.style.color = '#636C81'
  toggleBtnOffice.style.color = '#fff'
}

// Header Start
(function () {
  const header = document.querySelector('.header');
  const order = document.querySelector('.order-cleaning');
  const button = document.querySelector('.order-button');

  window.onscroll = () => {
      if (window.pageYOffset > 100) {
          header.classList.add('header_active');
          order.classList.add('order-cleaning_active');
          button.classList.add('order-button_active');
      } else {
          header.classList.remove('header_active');
          order.classList.remove('order-cleaning_active');
          button.classList.remove('order-button_active');
      }
  };
}());