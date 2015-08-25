var m = require('mithril');

var Hello = {
  view: function(ctrl, props) {
    return <p>Hello {props.name}</p>;
  }
};

var App = {
  view: function(ctrl) {
    return <Hello name="Seqs"/>;
  }
};

module.exports = App;
