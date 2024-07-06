const burgerButton = document.querySelector('.burger-button');
const menuList = document.querySelector('.header-content__menu-list');
const menuItems = document.querySelectorAll('.header-content__menu-link')

if (burgerButton) {
  burgerButton.addEventListener('click', function() {
    menuList.classList.toggle('header-content__menu-list--active');
});
}


if (menuItems) {
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    menuList.classList.remove('header-content__menu-list--active');
  })
}); 
}