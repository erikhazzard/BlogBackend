/* =========================================================================
 *
 * posts
 *      Posts related functionality
 *
 *  ======================================================================== */
var _ = require('lodash');
var logger = require('bragi');
var nconf = require('nconf');

var request = require('request');
var mongoose = require('mongoose');

var Post = mongoose.model('Post');

var getTemplateVariables = require('../util/getTemplateVariables');
var setCacheHeaders = require('../util/set-cache-headers');

// ======================================
// 
// Routes
// 
// ======================================
module.exports.routeRenderPostBySlug = function routeRenderPostsBySlug( req, res ){
    var slug = req.param('slug');

    Post.find({ slug: slug })
        .setOptions({ lean: true })
        .limit(1)
        .exec(function fetchedPost( err, postRes ){
            if(err || !postRes || (postRes && postRes.length < 1 )){
                setCacheHeaders(res, 0);
                logger.log('error:getPostBySlug:fetchedPost',
                'error fetching post or nor postRes | error: ' + err);

                return res.render('404.html', getTemplateVariables({
                    title: 'Page Not Found',
                    page: 'error-404'
                }));
            }

            var post = postRes[0];

            return res.render('post.html', getTemplateVariables({
                title: post.title,
                post: post,
                page: 'post'
            }));
        });
};
