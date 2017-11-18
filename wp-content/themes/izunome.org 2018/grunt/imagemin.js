module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
        }]
    }
}
