const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');

describe('/api', function() {
  describe('GET /api/imagesearch/[search term][?offset=[number]]', function() {
    var singleResult;

    it('should return an array', function(done) {
      request(app)
        .get('/api/imagesearch/chocolate?offset=10')
        .end(function(err, result) {
          if (err) {
            return done(err);
          }
          const body = result.body;
          expect(body).to.be.instanceof(Array);
          singleResult = body[0];
          done();
        });
    });

    describe('returned image object', function() {
      it('should contain the properties: url, snippet, thumbnail, context', function() {
        expect(singleResult.url).to.exist;
        expect(singleResult.snippet).to.exist;
        expect(singleResult.thumbnail).to.exist;
        expect(singleResult.context).to.exist;
      });
    });
  });

  describe('GET /api/latest/imagesearch/', function() {
    var singleResult;

    it('should show an array of the latest searches', function(done) {
      request(app)
        .get('/api/latest/imagesearch')
        .end(function(err, result) {
          if (err) {
            return done(err);
          }
          expect(result.body).to.be.instanceof(Array);
          singleResult = body[0];
          done();
        });
    });

    describe('returned search objects', function() {
      it('should contain the properties: term, when', function(done) {
        expect(singleResult.term).to.exist;
        expect(singleResult.when).to.be.instanceof(Date);
      });
    });
  });
});
