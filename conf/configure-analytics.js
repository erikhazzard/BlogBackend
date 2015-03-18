/* =========================================================================
 *
 * configure-analytics.js
 *  Configures amqp related settings
 *
 *  NOTE: This is not necessary anymore, but still included for legacy...
 *  TODO: remove calls including this
 *
 * ========================================================================= */
var nconf = require('nconf');

module.exports = function configureAnalytics(){
    var influxConfig = nconf.get('influxdb') || { };

    var influxDbUrl = 
        (influxConfig.protocol || 'http') + '://' +
        (influxConfig.host || 'localhost') + '/db/' + 
        (influxConfig.db || 'analytics') + '/series?' +
        'u=' + (influxConfig.username || 'root') +
        '&p=' + (influxConfig.password || 'root');


    nconf.add('analytics', {
        'type': 'literal',
        'analytics': { 
            'url': influxDbUrl
        }
    });
};
