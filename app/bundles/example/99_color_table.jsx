var m = require('mithril');
var _ = require('underscore');
var colors = require('bundles/example/99_colors.json');

var ColorTable = {
  controller: function() {
    this.colors = colors;
  },

  view: function(ctrl) {
    return (

      <table class="color-table">
        <tbody>
          {_.map(ctrl.colors, function(colors, index) {
            return (<tr>
              {_.map(colors, function(color, key) {
                var bgcolor = color.indexOf('#') > -1 ? color : colors[color];
                return (<td style={"background-color: " + bgcolor}> {key} </td>);
              })}
            </tr>);
          })}
        </tbody>
      </table>

    );
  }
};

module.exports = ColorTable;
