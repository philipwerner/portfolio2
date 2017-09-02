'use strict';
var app = app || {};

(function(module) {
  const projectView = {};

  projectView.initProjectPage = () => {
    app.Projects.all.forEach(project => {
      $('#projects').append(project.toHtml('#project-template'));
    });

  }
  app.Projects.fetchAll(projectView.initProjectPage);
  module.projectView = projectView
})(app);
