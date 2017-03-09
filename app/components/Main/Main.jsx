var React = require('react');
var Nav = require('Nav');
  // to render all component in center of main file we style here.
var Main = React.createClass({

  render: function(){

    return (
      <div>
          <Nav/>
          
          <div className ="row ">
            <div className ="columns medium-6 larg-4 small-centered ">

              {this.props.children}
            </div>
          </div>


      </div>

      );
  }
});



module.exports = Main;
