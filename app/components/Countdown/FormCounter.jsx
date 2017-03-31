var React = require('react');

var FormCounter = React.createClass({

    onSubmission: function(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = ""
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }

    },

    render: function() {

        return (
            <div>

                <form ref="form" onSubmit={this.onSubmission} className="Form-Countdown">
                    <input type="text" ref="seconds" placeholder=" Enter Time in second"/>
                    <button className=" button expanded">Start</button>
                </form>

            </div>
        );
    }

});
module.exports = FormCounter;
