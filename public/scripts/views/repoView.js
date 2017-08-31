'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $repos = $('#repos');

    $repos.find('ul').empty();
    $repos.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repos-template').text());

  repoView.index = function() {
    ui();

    $('#repos ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
