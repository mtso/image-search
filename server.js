const express = require('express');
const marked  = require('marked');
const fs      = require('fs');
const redis   = require('redis');

const imageSearchController = require('./api/controllers/imagesearch');
const latestController      = require('./api/controllers/latest');

const readme = fs.readFileSync('./README.md');
const index  = marked(readme.toString());
const app    = express();
const client = redis.createClient(process.env.REDIS_URL);
const port   = process.env.PORT || 3750;

app.use('/api/imagesearch/:query', imageSearchController.imagesearch);
app.use('/api/latest/imagesearch', latestController.latest(client));
app.use('/', (_, res) => res.send(index));

app.listen(port);
console.log('listening on ' + port);

exports = module.exports = app;
