var should = require('chai').should(),
    MarkedMetaData = require('../index');

describe('#getmeta', function() {
	it('get metadata from a markdown file;', function() {
		var md = new MarkedMetaData('./test/test.md');
		md.metadata().should.equal('x');
	});
});

