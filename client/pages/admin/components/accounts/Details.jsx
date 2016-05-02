var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var DetailsForm = require('./DetailsForm.jsx');
var UserForm = require('./UserForm.jsx');
var StatusForm = require('./StatusForm.jsx');
var NoteForm = require('./NoteForm.jsx');
var DeleteForm = require('./DeleteForm.jsx');
var AccountStore = require('../../stores/Account');
var StatusStore = require('../../stores/Status');
var Actions = require('../../actions/Account');
var StatusActions = require('../../actions/Status');


var Link = ReactRouter.Link;


var Component = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {

        AccountStore.resetDetails();
        AccountStore.resetUser();
        AccountStore.resetStatus();
        AccountStore.resetNote();
        AccountStore.resetDelete();
        StatusStore.resetResults();

        Actions.getDetails(this.props.params);
        StatusActions.getResults({ pivot: 'Account', limit: 99 });

        return {
            details: AccountStore.getDetails(),
            user: AccountStore.getUser(),
            status: AccountStore.getStatus(),
            note: AccountStore.getNote(),
            delete: AccountStore.getDelete(),
            statuses: StatusStore.getResults()
        };
    },
    componentDidMount: function () {

        AccountStore.addChangeListener(this.onStoreChange);
        StatusStore.addChangeListener(this.onStoreChange);
    },
    componentWillUnmount: function () {

        AccountStore.removeChangeListener(this.onStoreChange);
        StatusStore.removeChangeListener(this.onStoreChange);
    },
    onStoreChange: function () {

        this.setState({
            details: AccountStore.getDetails(),
            user: AccountStore.getUser(),
            status: AccountStore.getStatus(),
            note: AccountStore.getNote(),
            delete: AccountStore.getDelete(),
            statuses: StatusStore.getResults()
        });
    },
    render: function () {

        if (this.state.details.hydrated && this.state.details.fetchFailure) {
            return (
                <section className="section-account-details container">
                    <h1 className="page-header">
                        <Link to="/admin/accounts">Accounts</Link> / Error
                    </h1>
                    <div className="alert alert-danger">
                        {this.state.details.error}
                    </div>
                </section>
            );
        }

        return (
            <section className="section-account-details container">
                <h1 className="page-header">
                    <Link to="/admin/accounts">Accounts</Link> / {this.state.details.name.first} {this.state.details.name.last}
                </h1>
                <div className="row">
                    <div className="col-sm-8">
                        <DetailsForm data={this.state.details} />
                        <UserForm
                            details={this.state.details}
                            data={this.state.user}
                        />
                        <DeleteForm
                            details={this.state.details}
                            data={this.state.delete}
                        />
                    </div>
                    <div className="col-sm-4">
                        <StatusForm
                            details={this.state.details}
                            data={this.state.status}
                            list={this.state.statuses}
                        />
                        <NoteForm
                            details={this.state.details}
                            data={this.state.note}
                        />
                    </div>
                </div>
            </section>
        );
    }
});


module.exports = Component;
