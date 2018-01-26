'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['Teampx'],
  /**
   * Your New Relic license key.
   */
  //license_key: process.env.NEW_RELIC,
  license_key: '35a3f2f7188c780eacd0e0920b98d23473e9dcc0',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
