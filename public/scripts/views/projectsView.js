'use strict';
var app = app || {};

(function(module) {
  const projectView = {};

  projectView.initIndexPage = () => {
    app.Projects.all.forEach(project => {
      $('#projects').append(project.toHtml('#project-template'));
    });

  }
  app.Projects.fetchAll(projectView.initIndexPage);
  module.projectView = projectView
})(app);
