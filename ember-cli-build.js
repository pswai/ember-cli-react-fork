/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  // Import Semantic UI
  app.import('node_modules/semantic-ui-css/semantic.min.css');
  const semanticUiAssets = new Funnel('node_modules/semantic-ui-css/themes', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/assets/themes',
  });

  return app.toTree([semanticUiAssets]);
};
