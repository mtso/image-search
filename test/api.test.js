const request = require('supertest');
const app = require('../server');

describe('/api', function() {
  describe('GET /api/imagesearch/[search term][?offset=[number]]', function() {
    it('should return an array', function(done) {

    });

    describe('returned image object', function() {
      it('should contain the fields: url, snippet, thumbnail, context', function(done) {

      });
    });
  });

  describe('GET /api/latest/imagesearch/', function)
});