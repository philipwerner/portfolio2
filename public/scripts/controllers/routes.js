'use strict'
var app = app || {};

page('/', app.homeController.index);
page('/projects', app.projectsController.index);
page('/github', app.reposController.index);
page('/about', app.aboutController.index);
page();
