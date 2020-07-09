'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = pageHeader.querySelector('.page-header__nav-toggler');
var navBlock = pageHeader.querySelector('.page-header__nav');
var svgLogo = pageHeader.querySelector('.page-header__svg');

navBlock.classList.remove('page-header__nav--no-js');
headerToggle.classList.remove('page-header__nav-toggler--no-js');

headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('page-header__nav-toggler--menu-closed')) {
    headerToggle.classList.remove('page-header__nav-toggler--menu-closed');
    headerToggle.classList.add('page-header__nav-toggler--menu-opened');
  } else {
    headerToggle.classList.add('page-header__nav-toggler--menu-closed');
    headerToggle.classList.remove('page-header__nav-toggler--menu-opened');
  }

  if (navBlock.classList.contains('page-header__nav--closed')) {
    navBlock.classList.remove('page-header__nav--closed');
    navBlock.classList.add('page-header__nav--opened');
  } else {
    navBlock.classList.add('page-header__nav--closed');
    navBlock.classList.remove('page-header__nav--opened');
  }

  if (svgLogo.classList.contains('page-header__svg--menu-closed')) {
    svgLogo.classList.remove('page-header__svg--menu-closed');
    svgLogo.classList.add('page-header__svg--menu-opened');
  } else {
    svgLogo.classList.add('page-header__svg--menu-closed');
    svgLogo.classList.remove('page-header__svg--menu-opened');
  }
});
