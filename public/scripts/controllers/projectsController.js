'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.index = () => {
    app.Projects.fetchAll(app.projectView.initIndexPage);

    $('main > section').hide();
    $('#projects').show();
  };

  module.projectsController = projectsController;
})(app);
