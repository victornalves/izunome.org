module.exports = {
    fonts:{
        files: [{
            cwd: 'assets/fonts',
            src: [
                '**'
            ],
            dest: 'dist/css/fonts',
        }],
        pretend: false,
        verbose: true
    },
    images:{
        files: [{
            cwd: 'assets/img',
            src: [
                '**'
            ],
            dest: 'dist/img',
        }],
        pretend: false,
        verbose: true
    },
    vendorcss:{
        files: [{
            cwd: 'src/css/vendor',
            src: [
                '**'
            ],
            dest: 'dist/css/vendor',
        }],
        pretend: false,
        verbose: true
    },
    vendorjs:{
        files: [{
            cwd: 'src/js/vendor',
            src: [
                '**'
            ],
            dest: 'dist/js/vendor',
        }],
        pretend: false,
        verbose: true
    },
    node_modules:{
        files: [{
            cwd: 'node_modules/owl.carousel/dist',
            src: [
                'owl.carousel.min.js'
            ],
            dest: 'dist/js/vendor',
        },
        {
            cwd: 'node_modules/jquery/dist',
            src: [
                'jquery.min.js'
            ],
            dest: 'dist/js/vendor',
        },
        {
            cwd: 'node_modules/popper.js/dist/umd',
            src: [
                'popper.min.js'
            ],
            dest: 'dist/js/vendor',
        },
        {
            cwd: 'node_modules/bootstrap/dist/css',
            src: [
                'bootstrap.min.css'
            ],
            dest: 'dist/css/vendor',
        },
        {
            cwd: 'node_modules/bootstrap/dist/js',
            src: [
                'bootstrap.min.js'
            ],
            dest: 'dist/js/vendor',
        },
        {
            cwd: 'node_modules/normalize.css/',
            src: [
                'normalize.css'
            ],
            dest: 'dist/css/vendor',
        }]
    }
}
