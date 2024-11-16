# Water Data Cleanup

Script that connected to a postgres database to clear data older than a given timestamp.

This was used in a database that synced water reports from USGS once an hour.

Data archival was not a requirement,
so this script was run with a cron job to clear out data once a week in order to save on hosting costs.
