'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.index = () => {
    app.Projects.fetchAll(app.projectView.initIndexPage);

    // $('#home').hide();
    // $('#repos').hide();
    // $('#about').hide();
    $('#projects').show().siblings().hide();
  };

  module.projectsController = projectsController;
})(app);
