var env = require('./environment.js');

// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'cucumber',

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  capabilities: env.capabilities,

  onPrepare:function(){
    browser.manage().timeouts().implicitlyWait(5000);
    browser.manage().timeouts().pageLoadTimeout(10000);
    browser.ignoreSynchronization = true;
  },

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: 'step_definitions/*.js',
    //tags: '@dev',
    format: 'pretty'
  }
};