'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');

  if (pageHeader) {
    var headerToggle = pageHeader.querySelector('.page-header__nav-toggler');
    var navBlock = pageHeader.querySelector('.page-header__nav');
    var svgLogo = pageHeader.querySelector('.page-header__svg');

    navBlock.classList.remove('page-header__nav--no-js');
    headerToggle.classList.remove('page-header__nav-toggler--no-js');

    headerToggle.addEventListener('click', function () {
      headerToggle.classList.toggle('page-header__nav-toggler--menu-closed');
      headerToggle.classList.toggle('page-header__nav-toggler--menu-opened');
      navBlock.classList.toggle('page-header__nav--closed');
      navBlock.classList.toggle('page-header__nav--opened');
      svgLogo.classList.toggle('page-header__svg--menu-closed');
      svgLogo.classList.toggle('page-header__svg--menu-opened');
    });
  }
})();
