'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.index = () => {
    app.Projects.fetchAll(app.projectView.initProjectPage);

    $('#projects').show().siblings().hide();
  };

  module.projectsController = projectsController;
})(app);
