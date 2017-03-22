const LIST_KEY = 'search:latest';

var client;

function initialize(redis) {
  client = redis;
}

function saveSearch(searchTerm) {
  const entry = JSON.stringify({
    term: searchTerm,
    when: new Date()
  });

  return client.lpush(LIST_KEY, entry);
}

function getSearches(offset, count) {
  offset = offset || 0;
  count  = +count || 10;
  return new Promise(function(resolve, reject) {
    client.lrange(LIST_KEY, offset, offset + count - 1, function(err, results) {
      if (err) {
        return reject(err);
      }
      results = results.map(function(entry) {
        return JSON.parse(entry);
      });
      return resolve(results);
    });
  });
}

module.exports = {
  initialize: initialize,
  save: saveSearch,
  get: getSearches
}