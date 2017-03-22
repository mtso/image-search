const express = require('express');
const marked = require('marked');
const fs = require('fs');

const imageSearchController = require('./api/controllers/imagesearch');

const readme = fs.readFileSync('./README.md');
const index = marked(readme.toString());
const app = express();

app.use('/api/imagesearch/:query', imageSearchController.imagesearch);
app.use('/', (_, res) => res.send(index));

const port = process.env.PORT || 3750;
app.listen(port);
console.log('listening on ' + port);

exports = module.exports = app;