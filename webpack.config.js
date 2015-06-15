var webpack = require("webpack");
var env = (process.argv.indexOf('--build-production') > 0) ? 'production' : 'development';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticHtmlWebpackPlugin = require('./lib/static-html-webpack-plugin/index');

var lessSourceMap = (env != "production") ? "?sourceMap" : "";
var cdn = (env == "production") ? "//your-cdn-host.com" : "";
var hash = (env == "production") ? "[hash]" : "bundle";
var templateParams = {env: env, hash: hash, cdn: cdn};

var config = {
  // split app and vendor: http://webpack.github.io/docs/code-splitting.html
  entry: {
    home: "./app/bundles/home/index.js",
    mobile: "./app/bundles/mobile/index.js",
    vendor: ['mithril', 'node-polyglot'],
  },

  output: {
    path: __dirname + "/public",
    filename: "[name]-" + hash + ".js",
    // chunkFilename: "assets/[id]-"+hash+".js",
    pathinfo: true,
  },

  module: {
    loaders: [
      { test: /\.jsx/, loader: "msx-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader" + lessSourceMap) },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader" + lessSourceMap+"!less-loader") },

      { test: /\.jpe?g$|\.gif$|\.png$|\.svg($|\?)|\.eot($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)$/,
        loader: "file-loader", query: { name: "assets/[name]-" + hash + ".[ext]" } },
    ],

    // Disable handling of unknown requires
    unknownContextRegExp: /$^/,
    unknownContextCritical: false,

    // Disable handling of requires with a single expression
    exprContextRegExp: /$^/,
    exprContextCritical: false,

    // Warn for every expression in require
    wrappedContextCritical: false,

    // A RegExp or an array of RegExps. Don’t parse files matching.
    noParse: [
      // /[\/\\]node_modules[\/\\]moment[\/\\]moment.js$/
    ]
  },

  resolve: {
    root: [__dirname + '/bower_components', __dirname + '/app'],
    extensions: ["", ".web.coffee", ".web.js", ".js"],
    alias: {
      // underscore: __dirname + "/node_modules/underscore/underscore.js",
    }
  },

  plugins: [
    // new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])),
    new ExtractTextPlugin("[name]-" + hash + ".css"),

    // new webpack.IgnorePlugin(/^(\.|CodeMirror)$/),

    // http://webpack.github.io/docs/code-splitting.html
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor-" + hash + ".js"),

    new StaticHtmlWebpackPlugin('./app/assets/templates/home.html', 'index.html', templateParams),
    new StaticHtmlWebpackPlugin('./app/assets/templates/mobile.html', 'mobile/index.html', templateParams),
  ],

  // node: {fs: "empty"},
  cache: true,
  debug: true,
};

if (env == 'production') {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
} else {
  config.devtool = "source-map";
}

module.exports = config;
