var MODULE_REQUIRE
	/* built-in */
	, child_process = require('child_process')
	, fs = require('fs')
	/* NPM */

	/* in-package */
	;

var move = function(source, target, callback) {
	var rs, ws;

	rs = fs.createReadStream(source);
	ws = fs.createWriteStream(target);

	rs.on('error', callback);
	ws.on('error', callback);

	rs.on('close', function() {
		fs.unlink(source, callback);
	});

	rs.pipe(ws);
};

var min = function(source_filename, callback) {
	var target_filename = source_filename;
	var input_filename = source_filename;
	var output_filename = input_filename + '.guetzli';
	var command = 'guetzli "' + input_filename + '" "' + output_filename + '"';
	child_process.exec(command, function(err, stdout, stderr) {
		if (err) {
			return callback(err);
		}
		else {
			if (output_filename != target_filename) {
				move(output_filename, target_filename, callback);
			}
			else {
				callback(null);
			}
		}
	});
};

module.exports = min;
