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

// Header
(function () {
  const header = document.querySelector('.header');
  const order = document.querySelector('.order-hover');
  const bg = document.querySelector('.cursor-bg');
  const button = document.querySelector('.cursor-text');
  const owDoWeCleanHeading = document.querySelector('.howDoWeClean-heading');
  const sidebar = document.querySelector('.sidebar');
  const howDoWeCleankitchen = document.querySelector('.howDoWeClean-kitchen-img');

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header_active');
      order.classList.add('order-hover_active');
      bg.classList.add('cursor-bg_active');
      button.classList.add('cursor-text_active'); 
    } else {
      header.classList.remove('header_active');
      order.classList.remove('order-hover_active');
      bg.classList.remove('cursor-bg_active');
      button.classList.remove('cursor-text_active');
    }

    if (window.pageYOffset > 1290) {
      header.classList.add('header_active-2');
      order.classList.add('order-hover_active-2');
      owDoWeCleanHeading.classList.add('howDoWeClean-heading_active-2');
      sidebar.classList.add('sidebar_active-2');
      howDoWeCleankitchen.classList.add('howDoWeClean-kitchen-img_active-2');
    } else {
      header.classList.remove('header_active-2');
      order.classList.remove('order-hover_active-2');
      owDoWeCleanHeading.classList.remove('howDoWeClean-heading_active-2');
      sidebar.classList.remove('sidebar_active-2');
      howDoWeCleankitchen.classList.remove('howDoWeClean-kitchen-img_active-2');
    }
  };
}());

// Animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, Left: rect.Left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// Mouse cursor
const cursor = document.querySelector('.cursor-bg');
const cursorText = document.querySelector('.cursor-text');
const cursorRadius = document.querySelector('.cursor-radius');

document.addEventListener('mousemove', e => {

  cursor.style.top = (e.clientY - 100) + 'px';
  cursor.style.left = (e.clientX - 100) + 'px';

  cursorText.style.top = (e.clientY - 20) + 'px';
  cursorText.style.left = (e.clientX - 60) + 'px';

  cursorRadius.style.top = (e.clientY - 200) + 'px';
  cursorRadius.style.left = (e.clientX - 200) + 'px';
})









