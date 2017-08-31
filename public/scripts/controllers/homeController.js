'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.index = () => {

    // $('#projects').hide();
    // $('#repos').hide();
    // $('#about').hide();
    $('#home').show().siblings().hide();
  };

  module.homeController = homeController;
})(app);
