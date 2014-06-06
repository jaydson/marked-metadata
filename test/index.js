var should = require('chai').should(),
	expect = require('chai').expect,
    MarkedMetaData = require('../index');

describe('#simple markdown stuff', function() {
	var md = new MarkedMetaData('./test/test.md');
	var md1 = new MarkedMetaData('./test/test1.md');
	var md2 = new MarkedMetaData('./test/test2.md');

	it('get a markdown file;', function() {
		md.getFile().should.equal('<!--\nlayout: post\ntitle: hello world\n-->\n#Hello');
	});

	it('#checking default tokens;', function() {
		expect(md.getTokens()).to.deep.equal(['---','---']);
	});

	it('#checking new tokens;', function() {
		md.defineTokens('<!--', '-->');
		expect(md.getTokens()).to.deep.equal(['<!--','-->']);
	});

	it('#checking another tokens;', function() {
		md.defineTokens('{{{', '}}}');
		expect(md.getTokens()).to.deep.equal(['{{{','}}}']);
	});

	it('#Getting markdown metadata;', function () {
		var obj = { layout: ' post', title: ' hello world' };
		md.defineTokens('<!--', '-->');
		expect(md.metadata()).to.deep.equal(obj);
	});

	it('#Getting markdown metadata 1;', function () {
		var obj = { layout: ' post', title: ' hello world' };
		md1.defineTokens('---', '---');
		expect(md1.metadata()).to.deep.equal(obj);
	});

	it('#Getting parsed markdown;', function () {
		md.defineTokens('<!--', '-->');
		md.markdown().should.equal('\n#Hello');
	});

	it('#Getting parsed markdown 1;', function () {
		md1.defineTokens('---', '---');
		md1.markdown().should.equal('\n#Hello 1');
	});

	it('#Getting parsed markdown cropped;', function () {
		md2.defineTokens('<!--', '-->');
		md2.markdown({ crop : '{{more}}'}).should.equal('\n#Hello 2\n');
	});

	it('#Getting parsed markdown no-cropped;', function () {
		md2.defineTokens('<!--', '-->');
		md2.markdown().should.equal('\n#Hello 2\n{{more}}');
	});
});

