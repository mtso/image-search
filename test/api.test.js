const request = require('supertest');
const app = require('../server');

describe('/api', function() {
  describe('GET /api/imagesearch/[search term][?offset=[number]]', function() {
    it('should return an array', function(done) {
      request(app)
        .get('/api/imagesearch/chocolate?offset=10');
        // test result
        .end(done);
    });

    describe('returned image object', function() {
      it('should contain the fields: url, snippet, thumbnail, context', function(done) {
        // request(app)
      });
    });
  });

  describe('GET /api/latest/imagesearch/', function() {
    it('should show an array of the latest searches', function(done) {
      // request(app);
    });

    describe('returned search objects', function() {
      it('should contain term and when', function(done) {
        // request(app)
      });
    });
  });
});