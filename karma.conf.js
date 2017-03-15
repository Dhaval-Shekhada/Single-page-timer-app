
var webpackConfig = require('./webpack.config.js');
module.exports =function(config){
  if(process.env.RELEASE){
    config.singleRun =true;
  }
  //var isCi = process.env.CONTINUOUS_INTEGRATION === 'true',

 config.set({
  browsers: [process.env.CONTINUOUS_INTEGRATION ?'Firefox':'Chrome'],
  singleRun: true,
  frameworks:['mocha'],

  files:['app/tests/**/*.test.jsx'],
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
  }
  
});


};
