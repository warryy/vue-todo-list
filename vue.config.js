module.exports = {
    // fix: and design 'Invalid Javascript is not enabled'
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            console.log('============config=================\n')
            console.log(config)
            console.log('============config=================\n')
        }
    }
}