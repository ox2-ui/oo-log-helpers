Package.describe({
  name: 'ox2:log-helpers',
  summary: 'Helper functions for pretty console.log output',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Npm.depends({
  "console.table": "0.4.0",
  "colors": "1.1.2",
  "chalk": "1.1.0"
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // 3rd party
  api.use([
    'grigio:babel@0.1.4'
    ]);
  api.addFiles('lib/oo-log-helpers.es6', CS);
  api.export('oo');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:log-helpers');
  api.addFiles('tests/oo-log-helpers-tests.js');
});
