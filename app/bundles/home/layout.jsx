var m = require('mithril');
var Header = require('bundles/home/header.jsx');
var Footer = require('bundles/home/footer.jsx');

var Layout = {
  controller: function() {

  },

  view: function(ctrl, props, children) {
    return (
      <div id="main">
        <Header/>

        <div class="container">
          <div class="row">
            <div class="col-md-10">
              {children}
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
};

module.exports = Layout;
