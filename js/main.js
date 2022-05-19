// Header logo & switch
var btn = document.getElementById('btn')
var toggleBtnHome = document.getElementById('toggleBtnHome')
var toggleBtnOffice = document.getElementById('toggleBtnOffice')

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