var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DetailsForm = require('./DetailsForm.jsx');
var UserForm = require('./UserForm.jsx');
var GroupsForm = require('./GroupsForm.jsx');
var PermissionsForm = require('./PermissionsForm.jsx');
var DeleteForm = require('./DeleteForm.jsx');
var AdminStore = require('../../stores/Admin');
var AdminGroupStore = require('../../stores/AdminGroup');
var Actions = require('../../actions/Admin');
var GroupActions = require('../../actions/AdminGroup');


var Link = ReactRouter.Link;


var Component = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {

        AdminStore.resetDetails();
        AdminStore.resetPermissions();
        AdminStore.resetUser();
        AdminStore.resetGroups();
        AdminStore.resetDelete();
        AdminGroupStore.resetResults();

        Actions.getDetails(this.props.params);
        GroupActions.getResults({ fields: 'name', limit: 99 });

        return {
            details: AdminStore.getDetails(),
            permissions: AdminStore.getPermissions(),
            user: AdminStore.getUser(),
            groups: AdminStore.getGroups(),
            delete: AdminStore.getDelete(),
            adminGroups: AdminGroupStore.getResults()
        };
    },
    componentDidMount: function () {

        AdminStore.addChangeListener(this.onStoreChange);
        AdminGroupStore.addChangeListener(this.onStoreChange);
    },
    componentWillUnmount: function () {

        AdminStore.removeChangeListener(this.onStoreChange);
        AdminGroupStore.removeChangeListener(this.onStoreChange);
    },
    onStoreChange: function () {

        this.setState({
            details: AdminStore.getDetails(),
            user: AdminStore.getUser(),
            groups: AdminStore.getGroups(),
            permissions: AdminStore.getPermissions(),
            delete: AdminStore.getDelete(),
            adminGroups: AdminGroupStore.getResults()
        });
    },
    render: function () {

        if (this.state.details.hydrated && this.state.details.fetchFailure) {
            return (
                <section className="section-admin-details container">
                    <h1 className="page-header">
                        <Link to="/admin/admins">Admins</Link> / Error
                    </h1>
                    <div className="alert alert-danger">
                        {this.state.details.error}
                    </div>
                </section>
            );
        }

        return (
            <section className="section-admin-details container">
                <h1 className="page-header">
                    <Link to="/admin/admins">Admins</Link> / {this.state.details.name.first} {this.state.details.name.last}
                </h1>
                <div className="row">
                    <div className="col-sm-8">
                        <DetailsForm data={this.state.details} />
                        <UserForm
                            details={this.state.details}
                            data={this.state.user}
                        />
                        <GroupsForm
                            details={this.state.details}
                            data={this.state.groups}
                            list={this.state.adminGroups}
                        />
                        <PermissionsForm
                            details={this.state.details}
                            data={this.state.permissions}
                        />
                        <DeleteForm
                            details={this.state.details}
                            data={this.state.delete}
                        />
                    </div>
                </div>
            </section>
        );
    }
});


module.exports = Component;
