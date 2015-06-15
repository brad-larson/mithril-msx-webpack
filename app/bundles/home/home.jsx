var app = {};

app.controller = function() {};

app.view = function(ctrl) {
  return <div class="home-container">
    <a href="#/account/signin">signin</a> |
    <a href="#/account/signup">signup</a> <br/>
    home
  </div>;
};

module.exports = app;
