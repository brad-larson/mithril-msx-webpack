var m = require('mithril');

var LikeButton = {
  controller: function() {
    var self = this;

    self.state = {liked: m.prop(false)};

    self.handleClick = function(event) {
      self.state.liked(!self.state.liked());
    };
  },

  view: function(ctrl) {
    var text = ctrl.state.liked() ? 'like' : 'haven\'t liked';
    return (
      <p>
        You {text} this. <a href="javascript:;" onclick={ctrl.handleClick}>Click</a> to toggle.
      </p>
    );
  }
};

module.exports = LikeButton;
