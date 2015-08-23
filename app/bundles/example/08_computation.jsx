var m = require('mithril');

var Computation = {
  controller: function() {
    var self = this;
    self.count = m.prop(0);

    m.startComputation();
    var timer = window.setInterval(function() {
      self.count(self.count() + 1);
      m.endComputation();
    }, 1000 * 2);

    self.unload = function() {
      window.clearInterval(timer);
    };
  },

  view: function(ctrl) {
    return <p>{ctrl.count()}</p>;
  }
};

module.exports = Computation;

