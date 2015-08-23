var m = require('mithril');

var Show = {
  controller: function() {

  },

  view: function(ctrl) {
    return (
      <div class="slides-container">
        <a href="#/"><span class="glyphicon glyphicon-home"></span></a>
        <div class="pull-right">
          <a href=""><span class="glyphicon glyphicon-triangle-left"></span></a>
          <a href=""><span class="glyphicon glyphicon-triangle-right"></span></a>
        </div>

        <div class="slides">
          <h1 class="text-center">Mithril入门</h1>
          <p class="text-center">构建H5单页面应用的瑞士军刀</p>
        </div>

      </div>
    );
  }
};

module.exports = Show;
