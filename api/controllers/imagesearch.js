const request = require('request');
const Search  = require('../models/search');

const CUSTOMSEARCH_URL = 'https://www.googleapis.com/customsearch/v1';
const SEARCH_TYPE      = 'image';

function stringifyParameters(object) {
  const keys = Object.keys(object);
  return keys.map(function(key) {
    return key + '=' + object[key];
  }).join('&');
}

function buildQuery(url, search, offset) {
  return url + '?' + stringifyParameters({
    key: process.env.CUSTOMSEARCH_KEY,
    cx: process.env.CUSTOMSEARCH_CX,
    searchType: SEARCH_TYPE,
    q: search,
    start: offset || 1
  });
}

function convertResultToImage(item) {
  return {
    url:       item.link,
    snippet:   item.snippet,
    thumbnail: item.image.thumbnailLink,
    context:   item.image.contextLink
  }
}

exports.imagesearch = function(req, res) {
  const searchTerm = req.params.query;
  const queries    = req.query;
  const apiQuery   = buildQuery(CUSTOMSEARCH_URL, searchTerm, queries.offset);

  Search.save(searchTerm);

  request.get(apiQuery, function(err, response) {
    if (err) {
      return res.send(err);
    }
    const results = JSON.parse(response.body);
    const images  = results.items.map(convertResultToImage);
    res.json(images);
  });
};