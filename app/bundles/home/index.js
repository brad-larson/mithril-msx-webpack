require('assets/styles/home.less');

var m = require('mithril');

//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

m.route(document.getElementById("content-container"), "/", {
  "/": require('bundles/home/home.jsx'),
  "/account/signin": require('bundles/account/signin.jsx'),
  "/account/signup": require('bundles/account/signup.jsx'),
});
