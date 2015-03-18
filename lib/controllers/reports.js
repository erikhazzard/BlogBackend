/* =========================================================================
 *
 * reports-new.js
 *  Handles report related functionality
 *
 *  ======================================================================== */
var _ = require('lodash');
var logger = require('bragi');

var mongoose = require('mongoose');
var async = require('async');

// ensure we point to the root folder's lib
var nconf = require('nconf');

// Models
var User = mongoose.model('User');
var Report = mongoose.model('Report');
var Counter = mongoose.model('Counter');

var analytics = require('./analytics');

// ======================================
//
// NEW Report
//
// ======================================
module.exports.routePostCreateReport = function routePostCreateReport ( req, res ){
    // Route to create new world
    // get options from request

    // Ensure that either a requested user was found OR if no user was provided,
    // that an admin secret was passed in
    if( !req.fetchedUser ){
        if( !req.param('secret') ){
            logger.log('error:routePostCreateReport',
                'request for world creation does not include user or secret', {
                user: req.fetchedUser
            });
            return res.sendPrepared(null, {
                error: true, message: 'Invalid call or user provided',
                status: 400
            });

        } else if (req.param('secret') !== SECRETS.createReport){
            logger.log('error:routePostCreateReport',
            'invalid secret passed in', {
                secret: req.param('secret')
            });
            return res.sendPrepared(null, {
                error: true, message: 'Invalid secret', status: 400
            });
        }
    }

    // get and clean title
    var title = req.param('title') || req.param('name');
    if(!title){
        return res.sendPrepared(null,{
            error: true, message: 'No title passed in', status: 507
        });
    }

    title = (''+title).trim();

    // Everything good to go, let's create a world
    var createOptions = {
        title: title,
        ranking: req.param('ranking'),
        zipCode: req.param('zipCode'),
        emoticon: req.param('emoticon'),
        color: req.param('color'),
        userId: req.fetchedUser._id+'' 
    };

    // get latlon
    var loc = req.param('loc');
    if(loc){
        loc = getLocFromQuery(loc);
        if(loc){ createOptions.loc = loc; }
    }

    logger.log('routePostCreateReport:preparingToCreate',
        'preparing to create world: %j', createOptions);

    // -----
    return res.sendPrepared({});
};
