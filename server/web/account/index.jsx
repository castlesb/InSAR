'use strict';

const React = require('react');
const Layout = require('../layouts/Plain');

const Component = React.createClass({
    render: function () {

        const neck = [
            <link key="layout" rel="stylesheet" href="/public/layouts/default.min.css" />,
            <link key="page" rel="stylesheet" href="/public/pages/account.min.css" />,
            <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />,
            <link rel="stylesheet" href="/public/pages/style.css" />,
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css" />,
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.0/css/bootstrap-datepicker.css" />,
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.0/css/bootstrap-datepicker.min.css" />,
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.2.3/leaflet.draw.css" />
        ];
        const feet = [
            <script src="/public/pages/account.min.js"></script>,
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>,
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>,
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.js"></script>,
            <script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>,
            <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.2.3/leaflet.draw.js"></script>,
            <script src="/public/pages/script.js"></script>
        ];

        return (
            <Layout
                title="Account"
                neck={neck}
                feet={feet}>

                <div id="app-mount"></div>
            </Layout>
        );
    }
});

module.exports = Component;
