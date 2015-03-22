/* =========================================================================
 *
 * Post.js
 *     Post model definition
 *
 * ========================================================================= */
var mongoose = require('mongoose');
var nconf = require('nconf');
var _ = require('lodash');

var PostSchema = new mongoose.Schema({
    title: {type: String},
    slug: {type: String, index: true, unique: true, sparse: true},

    created: {type: Date, 'default': Date.now },

    description: {type: String},

    category: {type: String},
    tags: [{type: String}],

    // time to read ( in minutes)
    timeToRead: {type: Number, 'default': 5},

    // Actual post HTML
    content: {type: String},

});

// ======================================
//
// Functions
// 
// ======================================

// Register the schema
// --------------------------------------
mongoose.model('Post', PostSchema);
module.exports = PostSchema;
