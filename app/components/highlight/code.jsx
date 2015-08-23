require('highlight.js/styles/googlecode.css');

var m = require("mithril");
var classNames = require("classnames");
var hljs = require('highlight.js');
var HighlightCode = {};

HighlightCode.view = function(ctrl, props, children) {

  var styles = classNames({
    "hljs": true
  });

  var html = children.map(function(child) {
    return hljs.highlight(props.lang, child).value;
  });

  return (
    <pre class="highlight-code">
      <code className={classNames(props.lang, styles)}>{m.trust(html)}</code>
    </pre>
  );
};

module.exports = HighlightCode;
