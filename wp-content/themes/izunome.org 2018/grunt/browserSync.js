module.exports = {
    dev: {
        bsFiles: {
            src : [
                'dist/css/*.min.css',
                // 'dist/js/**/*.js',
                {
                    match: ['*.php', '**/*.php'],
                    fn: function (event, file) {
                        this.reload('*.php');
                    }
                }
            ]
        },
        options: {
            watchTask: true,
            proxy: "izunome.localhost.dev",
            logPrefix: 'BrowserSync Izunome',
            open: false,
            reloadOnRestart: true,
            reloadDelay: 0
        }
    }
};
