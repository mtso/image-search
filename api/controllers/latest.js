const Search = require('../models/search');

module.exports.latest = function(redis) {
  Search.initialize(redis);

  return function(req, res) {
    Search.get(0, req.query.count)
      .then(function(latestSearches) {
        res.json(latestSearches);
      })
      .catch(function(err) {
        res.send(err);
      });
  };
}