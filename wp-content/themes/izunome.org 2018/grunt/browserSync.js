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
            proxy: "vente.localhost.dev",
            logPrefix: 'BrowserSync vente',
            open: false,
            reloadOnRestart: true,
            reloadDelay: 0
        }
    }
};
