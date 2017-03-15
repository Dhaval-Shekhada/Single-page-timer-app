
var webpackConfig = require('./webpack.config.js');
module.exports =function(config){
  if(process.env.RELEASE){
    config.singleRun =true;
  }
  //var isCi = process.env.CONTINUOUS_INTEGRATION === 'true',

 config.set({
  browsers: ['Chrome'],
  singleRun: true,
  frameworks:['mocha'],

  files:['app/tests/**/*.test.jsx',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/foundation.min.js',
        'node_modules/foundation-sites/dist/foundation.min.css',
      'node_modules/react-addons-test-utils/index.js'],
  preprocessors:{
    'app/tests/**/*.test.jsx':['webpack','sourcemap']
  },
  reporters:['mocha'],

   client:{
     mocha:{
       timeout:'5000'
     }
   },
  webpack : webpackConfig,
  webpackServer:{
    noInfo: true
  },
  customLaunchers: {
           Chrome_travis_ci: {
               base: 'Chrome',
               flags: ['--no-sandbox']
           }
       }
});
if (process.env.TRAVIS === 'true') {
       config.browsers = ['Chrome_travis_ci'];
       config.singleRun = true;
       config.webpack.watch = false;
   }


};
