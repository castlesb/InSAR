var React = require('react');
var ReactRouter = require('react-router');


var Link = ReactRouter.Link;


var Component = React.createClass({
    render: function () {

        return (
            <section className="section-not-found container">
                <h1 className="page-header">Not Found</h1>
                <p>That route didn't match any handlers.</p>
                <Link to="/login">Back to login</Link>
            </section>
        );
    }
});


module.exports = Component;
