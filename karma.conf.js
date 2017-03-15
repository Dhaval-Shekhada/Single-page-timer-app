
var webpackConfig = require('./webpack.config.js');
module.exports =function(config){
 config.set({
  browsers: [process.env.CONTINOUS_INTEGRATION ? 'Firefox':'Chrome'],
  singleRun: true,
  frameworks:['chai','mocha'],
  plugins:[
    "karma-chrome-launcher",
    "karma-chai",
    "karma-mocha",
    "karma-webpack",
    "karma-sourcemap-loader"
  ],
  files:['tests.bundle.js'],
  preprocessors:{
    'tests.bundle.js':['webpack','sourcemap']
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
  }
});


};
