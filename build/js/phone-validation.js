'use strict';

(function () {
  var phoneInput = document.querySelector('#phone');

  if (phoneInput) {
    phoneInput.addEventListener('keydown', function (evt) {
      var key = evt.keyCode;
      if (key === 46 || key === 8 || key === 37 || key === 39) {
        return true;
      } else if (key < 48 || key > 57) {
        evt.returnValue = false;
        if (evt.preventDefault) {
          evt.preventDefault();
        }
      }
      return true;
    });
  }
})();
