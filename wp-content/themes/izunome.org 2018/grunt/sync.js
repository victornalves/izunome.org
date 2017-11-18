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
    }
}
