var m = require('mithril');
var Layout = require('bundles/home/layout.jsx');
var examples = require('bundles/example/index.js');

var Home = {
  controller: function() {
    return {
      examples: examples
    };
  },

  view: function(ctrl) {
    return (
      <Layout>
        <h4>Examples</h4>

        <ul>
          {ctrl.examples.map(function(example) {
            return <li><a href={example.url}>{example.title}</a></li>
          })}
        </ul>


        <h4>Resouces</h4>

        <ul>
          <li><a href="#/slide/01">Getting started with Mithril</a> <small>(Chinese)</small></li>
          <li><a href="http://slidedeck.io/lhorie/mithril-presentation-oct-js-tech-night"
            target="_blank">mithril-presentation-oct-js-tech-night</a></li>
        </ul>

      </Layout>
    )

  }
};

module.exports = Home;
