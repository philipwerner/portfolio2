'use strict';
var app = app || {};

(function(module) {
  const reposController = {};

  reposController.index = () => {
    // $('#home').hide();
    // $('projects').hide();
    // $('#about').hide();
    $('#repos').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.reposController = reposController;
})(app);
