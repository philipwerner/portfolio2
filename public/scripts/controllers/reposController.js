'use strict';
var app = app || {};

(function(module) {
  const reposController = {};

  reposController.index = () => {
    $('main > section').hide();
    $('#repos').show();
    app.repos.requestRepos(app.repoView.index);
  };

  module.reposController = reposController;
})(app);
