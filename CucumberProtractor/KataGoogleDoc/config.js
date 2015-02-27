exports.config = {
   framework: 'cucumber',
  rootElement: 'body', // location of ng-app directive
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['specs/*.feature'],
  cucumberOpts: {
    format: 'pretty'
  }
};
