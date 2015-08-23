var m = require('mithril');

var NotesList = {
  view: function(ctrl, props, children) {
    return (
      <ol>
      {children.map(function(child) {
        return (<li>{child}</li>);
      })}
      </ol>
    );
  }
};

var ComponentChildren = {
  view: function(ctrl) {
    return (
      <NotesList>
        <span>hello</span>
        <span>world</span>
      </NotesList>
    );
  }
};

module.exports = ComponentChildren;
