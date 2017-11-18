module.exports = {
    dev: {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        files: [{
            expand: true,
            cwd: 'dist/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
        }]
    }
}
