module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

	gtx.alias('dev', [
		'sass:compile',
		'cssmin:dev',
		'postcss:ie',
		'uglify:dev',
		'sync:fonts',
		"sync:images",
		'sync:vendorcss',
		'sync:vendorjs',
		'browserSync:dev',
		'concurrent'
	]);

	gtx.alias('build', [
		'sass:compile',
		'postcss:ie',
		'postcss:build',
		'uglify:build',
		'sync:fonts',
		'sync:vendorcss',
		'sync:vendorjs',
		"fingerprint",
		"imagemin:dynamic"
	]);

    gtx.alias('fingerprint', [function(){
        var fs = require('fs');
        var versionstr = new Date().getTime();
        var str = '<?php define("ASSETS_VERSION", "' + versionstr + '");';
        fs.writeFileSync( './app/assets_version.php', str )
    }]);

	gtx.alias('release', ['bump-commit']);
	gtx.alias('release-patch', ['bump-only:patch', 'release']);
	gtx.alias('release-minor', ['bump-only:minor', 'release']);
	gtx.alias('release-major', ['bump-only:major', 'release']);
	gtx.alias('prerelease', ['bump-only:prerelease', 'release']);

	gtx.alias('default', [function(){
		grunt.log.ok('Grunt Boilerplate\n');
		grunt.log.subhead('Possíveis comandos: \n');
		grunt.log.writeln('- grunt dev');
		grunt.log.writeln('- grunt build');
	}]);

    gtx.finalise();
}
