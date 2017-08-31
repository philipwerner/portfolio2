'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.index = () => {

    $('main > section').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(app);
