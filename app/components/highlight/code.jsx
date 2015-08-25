require('highlight.js/styles/googlecode.css');

var m = require("mithril");
var classNames = require("classnames");
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

var HighlightCode = {};

HighlightCode.view = function(ctrl, props, children) {
  var lang = props.lang || 'javascript';

  var styles = classNames({
    "hljs": true
  });

  var html = children.map(function(child) {
    return hljs.highlight(lang, child).value;
  });

  return (
    <pre class="highlight-code">
      <code className={classNames(lang, styles)}>{m.trust(html)}</code>
    </pre>
  );
};

module.exports = HighlightCode;
