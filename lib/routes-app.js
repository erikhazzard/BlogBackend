/* =========================================================================
 *
 * routes-app.js
 *  Handles all app routes (pages)
 *
 *  ======================================================================== */
var _ = require('lodash');

var nconf = require('nconf');
require('../conf/configure')();
var env = nconf.get('NODE_ENV');


var _ = require('lodash');

// ======================================
//
// UTILITY
//
// ======================================
function getTemplateVariables( options ){
    // always include these base keys (which can be overwritten)
    return _.extend({
        title: 'Home',
        page: 'home',
        description: ''
    }, options);
}

// ======================================
//
// ROUTES
//
// ======================================
var routes = function routesApi(app){
    app.get('/ping', function (req, res){
        return res.send('pong');
    });

    // ==================================
    //
    // App Pages
    //
    // ==================================
    app.get('/', function (req, res){
        // HOMEPAGE
        return res.render(
            'home.html', 
            getTemplateVariables({ title: 'Homepage', page: 'home' })
        );
    });

    app.get('/blog', function (req, res){
        // Blog
        return res.render(
            'blog.html', 
            getTemplateVariables({ title: 'Blog', page: 'blog' })
        );
    });
};

module.exports = routes;
