var should = require('chai').should(),
    MarkedMetaData = require('../index');

describe('#simple markdown', function() {
	it('get a markdown file;', function() {
		var md = new MarkedMetaData('./test/test.md');
		md.metadata().should.equal('<!--\nlayout: post\ntitle: hello world\n-->\n#Hello');
	});
});

