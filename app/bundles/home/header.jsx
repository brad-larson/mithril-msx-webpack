var m = require('mithril');

var Header = {
  controller: function() {

  },

  view: function(ctrl, props) {
    return (
      <div class="masthead">
        <div class="container">
          <h1><a href="#/">Mithril.js</a></h1>
          <p>
            A collection of simple demos of <a href="http://mithril.js.org" title="Visit the Mithril site">Mithril.js</a>.
          </p>
        </div>
      </div>
    );
  }
};

module.exports = Header;
