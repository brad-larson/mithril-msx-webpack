var m = require('mithril');

var Form = {
  controller: function() {
    this.value = m.prop('Hello!');
  },

  view: function (ctrl) {
    return (
      <form>
        <p class="form-control-static">{ctrl.value()}</p>
        <input type="text" class="form-control" value={ctrl.value()} oninput={m.withAttr('value', ctrl.value)} />
      </form>
    );
  }
};

module.exports = Form;

