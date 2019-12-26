module.exports = {
    // fix: and design 'Invalid Javascript is not enabled'
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}