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

var controllerPosts = require('./controllers/posts');

// ======================================
//
// UTILITY
//
// ======================================
var getTemplateVariables = require('./util/getTemplateVariables');

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

    app.route('/blog/:slug')
        .get(controllerPosts.routeRenderPostBySlug);
};

module.exports = routes;
