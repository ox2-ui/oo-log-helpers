Package.describe({
  name: 'ox2:log-helpers',
  summary: 'TESTING_DO_NOT_USE Helper functions for pretty console.log output',
  version: '1.2.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Npm.depends({
  "console.table": "0.4.0",
  "colors": "1.1.2",
  "chalk": "1.1.1"
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating',
    'ecmascript'
    ]);
  // 3rd party
  api.use([

    ]);
  api.addFiles('lib/oo-log-helpers.js', CS);
  api.export('oo');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:log-helpers');
  api.addFiles('tests/oo-log-helpers-tests.js');
});
