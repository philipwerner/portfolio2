'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.index = () => {
    $('#projects').show().siblings().hide();
  };

  module.projectsController = projectsController;
})(app);
