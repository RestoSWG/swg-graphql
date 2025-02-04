/**
 * Connection string used to pass custom properties to the underlying connection.
 *
 * By default connections will be recycled after 5 minutes of inactivity.
 */
export const ORA_CONN_STRING = process.env.ORA_CONN_STRING ?? '(DESCRIPTION=(EXPIRE_TIME=5))';

/**
 * Host where the Oracle DB for SWG is.
 */
export const ORA_HOST = process.env.ORA_HOST ?? '127.0.0.1';

/**
 * Username for the Oracle DB with the SWG Game DB.
 */
export const ORA_USER = process.env.ORA_USER ?? 'swg';

/**
 * Password for the Oracle DB.
 */
export const ORA_PASS = process.env.ORA_PASS ?? 'swg';

/**
 * Database to use within Oracle.
 */
export const ORA_DATABASE = process.env.ORA_DATABASE ?? 'swg';

/**
 * Domain to use within Oracle.
 */
export const ORA_DOMAIN = process.env.ORA_DOMAIN ?? 'swg';

/**
 * The port to expose the GraphQL server on.
 */
export const PORT = parseInt(process.env.PORT ?? '4000');

/**
 * The text search features require a specific index to be set up within your database.
 * If these indexes are not available, you should disable (full) text search.
 */
export const ENABLE_TEXT_SEARCH = Boolean(process.env.ENABLE_TEXT_SEARCH);

/**
 * Whether to disable the authorisation layer.
 */
export const DISABLE_AUTH = Boolean(process.env.DISABLE_AUTH);

/**
 * Elastic HTTP host, used by the authorisation layer to validate incoming requests.
 */
export const ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL ?? 'http://localhost:9200/';
export const ELASTIC_SEARCH_AUTH =
  process.env.ELASTIC_SEARCH_AUTH ?? '{ "username": "elastic", "password": "changeme" }';

export const ELASTIC_SEARCH_INDEX_NAME = process.env.ELASTIC_SEARCH_INDEX_NAME ?? 'object_search_index';

/**
 * Required Elastic privilege the requesters must have in order to make queries.
 */
export const ELASTIC_REQUIRED_PRIVILEGE = process.env.ELASTIC_REQUIRED_PRIVILEGE ?? 'api:8.0.0:csrToolGraphQl';

/**
 * The index to check for privleges within.
 */
export const ELASTIC_KIBANA_INDEX = process.env.elasticKibanaIndex ?? '.kibana';

export const STATION_ID_TO_ACCOUNT_NAME_SERVICE_URL = process.env.STATION_ID_TO_ACCOUNT_NAME_SERVICE_URL;
export const SEARCH_INDEXER_RECENT_LOGGED_IN_TIME =
  parseInt(process.env.SEARCH_INDEXER_RECENT_LOGGED_IN_TIME ?? '0') || 1000 * 60 * 60 * 1;
export const SEARCH_INDEXER_INTERVAL = parseInt(process.env.SEARCH_INDEXER_INTERVAL ?? '0') || 1000 * 60 * 10;
