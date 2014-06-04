var merked = require('marked'),
	fs = require('fs');

var MarkedMetaData = function (file) {
	
	var mdFile = fs.readFileSync(file).toString(); 

	/* Return the markdown metadata */
	this.metadata = function () {
		return mdFile;
	}
}

module.exports = MarkedMetaData;