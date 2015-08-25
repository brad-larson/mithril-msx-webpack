var m = require('mithril');

var Hello = {
  view: function(ctrl, props) {
    return <p>Hello {props.name}</p>;
  }
};

var App = {
  view: function(ctrl) {
    return (
      <div>
        <div class="x">
          <a href="#">#</a>
          <Hello>1</Hello>
        </div>

        <Hello name="Seqs"/>
      </div>
    );
  }
};

module.exports = App;
