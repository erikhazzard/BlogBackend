/* =========================================================================
 *
 * routes-api.js
 *  Handles all api routes
 *
 *  ======================================================================== */
var _ = require('lodash');

var nconf = require('nconf');
require('../conf/configure')();
var env = nconf.get('NODE_ENV');

// ======================================
//
// ROUTES
//
// ======================================
var routes = function routesApi(app){
    app.get('/api/ping', function (req, res){
        return res.send('pong');
    });


    // ----------------------------------
    //
    // API Endpoints
    //
    // ----------------------------------

};

module.exports = routes;
