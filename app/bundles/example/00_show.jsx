var m = require('mithril');
var Layout = require('bundles/home/layout.jsx');
var examples = require('bundles/example/index.js');
var HighlightCode = require("components/highlight/code.jsx");

var Show = {
  controller: function() {
    var self = this;
    var url = "#/example/" + m.route.param('name');
    self.current = null;
    self.state = {show: m.prop(false)};

    examples.forEach(function(example) {
      if (example.url == url) {
        self.current = example;
      }
    });

    self.show = function() {
      self.state.show(true);
    };
  },

  view: function(ctrl) {
    var Example = ctrl.current;

    return (
      <Layout>

        {Example ?
        <div>
          <h3>{Example.title}</h3>
          <HighlightCode><Example.raw/></HighlightCode>

          <p>&nbsp;<button onclick={ctrl.show} class="btn btn-warning pull-right">Run</button></p>
          {ctrl.state.show() ? <div class="component-render">
            {Example.compiled ?
            <HighlightCode><Example.compiled/></HighlightCode> : <Example.component/>}
          </div> : null}

        </div> : 'Not found'}

      </Layout>
    );
  }
};

module.exports = Show;
