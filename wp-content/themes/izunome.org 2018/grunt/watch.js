module.exports = {
    "sass": {
        "files": [
            "src/scss/**/*.scss"
            // "src/css/*.css",
            // "src/css/**/*.css"
        ],
        "tasks": [
            "sass:compile",
            "cssmin:dev"
        ]
    },
    "js": {
        "files": [
            "src/js/**/*.js",
            "src/js/*.js",
        ],
        "tasks": [
            "uglify:dev"
        ]
    },
    "dev": {
        "files": [
            "src/scss/**/*.scss",
            "src/js/**/*.js"
            // "assets/img/**/*.{png,jpg,jpeg,gif}"
        ],
        "tasks": [
            "sass:compile",
            "cssmin:dev",
            "uglify:dev"
            // "sync:images"
        ]
    },
    "options": {
        "spawn": false
    }
}
