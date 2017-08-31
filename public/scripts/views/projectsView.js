'use strict';
var app = app || {};

(function(module) {
  const projectView = {};

  projectView.initIndexPage = () => {
    app.Projects.allforEach(project => {
      $('#projects').append(project.toHtml('#projects-template'));
    });

  }
  app.Projects.fetchAll(projectView.initIndexPage);
  module.projectView = projectView
})(app);
