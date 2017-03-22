const express = require('express');
const request = require('request');
const marked = require('marked');
const fs = require('fs');

const readme = fs.readFileSync('./README.md');
const index = marked(readme.toString());

const app = express();

function buildQuery(url, search) {
  return url + 
    '?key=' + process.env.CUSTOMSEARCH_KEY + 
    '&cx=' + process.env.CUSTOMSEARCH_CX +
    '&q=' + search;
}

app.use('/api/imagesearch', function(req, res) {
  request.get(buildQuery('https://www.googleapis.com/customsearch/v1', 'chocolate'), function(err, response) {
    const results = JSON.parse(response.body);
    
    // console.log(response.body);
    // const json = '<pre>' + JSON.stringify(response, null, 2) + '</pre>';
    res.json(JSON.parse(response.body));
  });
    // .on('response', function(response) {
    //   // console.log(response);
    //   res.send(response);
    // });
});

app.use('/', (_, res) => res.send(index));

const port = process.env.PORT || 3750;
app.listen(port);
console.log('listening on ' + port);

exports = module.exports = app;