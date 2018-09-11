const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);
module.exports = {
  // 소스 매핑 스타일
  devtool: 'source-map',
  // 지당된 모듈이 번들링하지 않고 그 모듈이 어떤 형식으로 노출 되는지 설정할 수 있게 한다.
  externals: {
  },
  // root모뮬 또는 시작 지점이 무엇인지 webpack에게 알려 준다.
  entry: [
    require.resolve('babel-polyfill'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    require.resolve('react-error-overlay'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: false, // 배포 빌드 할 때 주석 제거
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath
  },
  // 모듈을 해석하는데 있어 영향을 미치는 옵션을 설정
  resolve: {
    // webpack이 모듈을 해설 할 때 검색 해야 할 모듈 설정
    modules: ['node_modules', paths.appNodeModules].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
    // 빈 확장자를 import하게 한다.
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    // 특정 모듈을 보다 쉽게 가져 오거나 요구하도록 별칭을 만든다.
    alias: {
      'react-native': 'react-native-web'
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc)
    ]
  },
  // 일반 모듈에 영향을 주는 옵션
  module: {
    // true일 경우 ES6 exports 누락 시 warning이 아닌 error를 발생
    strictExportPresence: true,
    rules: [
      {
        // loader 적용을 제외할 조건
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {
                  targets: {
                    browsers: [
                      '> 1%',
                      'last 2 versions',
                      'ie >= 10'
                    ]
                  },
                  module: false, // ES6 module 변환을 하지 않는다.
                  useBuiltIns: true, // babel-polyfill 사용
                  debug: false
                }],
                'react'
              ],
              plugins: [
                'transform-class-properties'
              ]
            }
          }
        ]
      },
      {
        test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 2
            }
          },
          {
            loader: require.resolve('sass-loader')
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssFlexbugsFixes,
                // autoprefixer: CSS 구문을 분석해 vendor-prefixed CSS 속성을 자동으로 추가해주는 플러그인
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'ie >= 10'
                  ],
                  flexbox: 'no-2009' // 접두사 IE 버전 사양
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw), // html에 일부 환경변수를 사용할 수 있게 제공
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.NamedModulesPlugin(), // 브라우저에서 HMR 에러발생시 module name 표시
    new webpack.DefinePlugin(env.stringified), // process.env.NODE_ENV는 개발환경인지 배포환경인지 알고자 할 때 쓰인다.
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    // You can remove this if you don't use Moment.js:
    /*
      moment.js 와 같이 locale 정보가 포함된 라이브러리를 사용하고 있다면
      locale 과 관련된 스크립트 파일을 위와 같은 방법으로 번들에 포함시키지 않을 수 있다.
    */
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // 라이브러리 require 무시
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  performance: {
    hints: false
  }
};
