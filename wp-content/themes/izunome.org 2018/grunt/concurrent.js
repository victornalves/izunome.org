module.exports = {
    target: {
        tasks: ['watch:sass', 'watch:js'],
        options: {
            limit: 4,
            logConcurrentOutput: true
        }
    }
}
