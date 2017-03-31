var webpack = require('webpack');
module.exports={
  entry:['script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery:'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output:{
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias:{
      Main :'app/components/Main/Main.jsx',
      Nav :'app/components/Main/Nav.jsx',
      Timer:'app/components/Timer/Timer.jsx',
      Countdown:'app/components/Countdown/Countdown.jsx',
      Clock:'app/components/Timer/Clock.jsx',
      applicationStyles:'app/Styles/app.scss',
      FormCounter:'app/components/Countdown/FormCounter.jsx'

    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015','stage-0'],
          "env": {
                "test": {
                    "plugins": [
                                [ "babel-plugin-webpack-alias", {
                                      "config": "${PWD}/webpack.config.test.js"
                                    }
                                  ]
                                ]
                        }
                  }
        },
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components )/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};
