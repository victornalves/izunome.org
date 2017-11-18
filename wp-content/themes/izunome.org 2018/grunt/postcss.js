module.exports = {
    build: {
        options: {
            map: {
                inline: false,
                annotation: 'dist/css/'
            },
            processors: [
                require('pixrem')(),
                require('autoprefixer')({browsers: '> 1%, last 2 version'}),
                require('cssnano')()
            ]
        },
        src: 'dist/css/main.css',
        dest: 'dist/css/main.min.css'
    },
    ie: {
        options: {
            map: {
                inline: false,
                annotation: 'dist/css/'
            },
            processors: [
                require('pixrem')(),
                require('autoprefixer')({browsers: '> 1%, last 2 version'}),
                require('cssnano')()
            ]
        },
        src: 'src/css/ie.css',
        dest: 'dist/css/ie.min.css'
    }
}
