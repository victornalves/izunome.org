module.exports = {
    dev: {
        options: {
            beautify: {
                // width: 80,
                beautify: true
            }
        },
        files: {
            'dist/js/application.js': [
                'src/js/**/*.js',
                '!**/vendor/**'
            ]
        }
    },
    build: {
        options: {
            sourceMap: true,
            sourceMapIncludeSources: true,
            sourceMapName: 'dist/js/application.map',
            beautify: false
        },
        files: {
            'dist/js/application.js': [
                'src/js/**/*.js',
                '!**/vendor/**'
            ]
        }
    }
}
