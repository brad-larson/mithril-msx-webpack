var m = require('mithril');

var UserGist = {
  controller: function() {
    var source = 'https://api.github.com/users/octocat/gists';
    var self = this;

    self.username = m.prop('');
    self.lastGistUrl = m.prop('');

    m.request({method: "GET", url: source}).then(function(result) {
      var lastGist = result[0];
      self.username(lastGist.owner.login);
      self.lastGistUrl(lastGist.html_url);
    });
  },

  view: function (ctrl) {
    return (
      <div>
        {ctrl.username()} last gist is <a href={ctrl.lastGistUrl()}>here</a>.
      </div>
    );
  }
};

module.exports = UserGist;

