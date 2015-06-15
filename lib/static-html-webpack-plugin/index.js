var swig  = require('swig');

function StaticHtmlWebpackPlugin(srcPath, destPath, options) {
  this.srcPath = srcPath;
  this.destPath = destPath;
  this.options = typeof options === 'object' ? options : {};
}

StaticHtmlWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compiler, done) {
    try {
      var webpackStatsJson = compiler.getStats().toJson();
      this.options.digest = this.options.hash.replace('[hash]', webpackStatsJson.hash);
      var html = swig.renderFile(this.srcPath, this.options);
      compiler.assets[this.destPath] = createAssetFromContents(html);
    } catch (err) {
      return done(err);
    }

    done();
  }.bind(this));
};

var createAssetFromContents = function(contents) {
  return {
    source: function() {
      return contents;
    },
    size: function() {
      return contents.length;
    }
  };
};

module.exports = StaticHtmlWebpackPlugin;
