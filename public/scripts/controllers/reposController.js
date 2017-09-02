'use strict';
var app = app || {};

(function(module) {
  const reposController = {};

  reposController.index = () => {

    $('#repos').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.reposController = reposController;
})(app);
