/* =========================================================================
 *
 * getTemplateVariables
 *  Returns an object of template variables to be used when rendering pages
 *
 *  ======================================================================== */
var _ = require('lodash');

module.exports = function getTemplateVariables( options ){
    // always include these base keys (which can be overwritten)
    return _.extend({
        title: 'Home',
        page: 'home',
        description: ''
    }, options);
};
