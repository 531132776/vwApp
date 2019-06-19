module.exports = {
    lintOnSave: false,
    baseUrl: '/fitalentUserApp',
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost:8080',
        port: 8087,
        // proxy: {
        //     '/gymCoach': {
        //         // target: 'http://120.77.220.25:8080', //对应自己的接口
        //         target: 'http://192.168.10.203:8769', //对应自己的接口
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/gymCoach': '/gymCoach'
        //         }
        //     },
        //     '/gymDevice': {
        //         // target: 'http://120.77.220.25:8080', //对应自己的接口
        //         target: 'http://192.168.10.203:8769/', //对应自己的接口
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/gymDevice': '/gymDevice'
        //         }
        //     },
        //     '/gymManager':{
        //            // target: 'http://120.77.220.25:8080', //对应自己的接口
        //            target: 'http://192.168.10.203:8769/', //对应自己的接口
        //            changeOrigin: true,
        //            ws: true,
        //            pathRewrite: {
        //                '^/gymManager': '/gymManager'
        //            }
        //     }
        // }
    }
}