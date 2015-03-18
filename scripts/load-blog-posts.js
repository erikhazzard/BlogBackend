/* =========================================================================
 *
 * load-blog-posts
 *  Loads blog posts from the ../templates/posts folder
 *
 * ========================================================================= */
var _ = require('lodash');
var logger = require('bragi');
var async = require('async');
var fs = require('fs');

// Posts data array
// --------------------------------------
var posts = [];    

// read files
// --------------------------------------
var postDirectory = __dirname + '/../templates/posts/';

fs.readdir(postDirectory, function(err, files){
    logger.log('load-blog-posts:readDir', 'files: %j', files);
    
    async.each(
        files,
        function processFile( file, callback ){
            fs.readFile(postDirectory + file, 'utf8', function(err, data){
                logger.log('load-blog-posts:readFile',
                'reading file : %j', file);

                // Load in data
                

                callback();
            });
        },
        function allDone( err, doneRes ){
            console.log(">>>>>>", doneRes);
        }
    );
});
