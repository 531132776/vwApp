let baseUrl; //这里是一个默认的url，可以没有
// switch (process.env.NODE_ENV) {
//     case 'alpha': // 注意这里的名字要和步骤二中设置的环境名字对应起来
//         baseUrl = "https://test.gateway.fitalent.com.cn/dev" //这里是测试环境中的url
//         break
//     case 'development':
//         baseUrl = "https://test.gateway.fitalent.com.cn/" //这里是本地的请求url
//         break
//     case 'production':
//         console.log(process.env.NODE_ENV, '2')
//         baseUrl = "https://gateway.fitalent.com.cn/pro" //生产环境url
//         break
// }

if (process.env.NODE_ENV === 'development') {
    baseUrl = "https://test.gateway.fitalent.com.cn/"
} else if (process.env.VUE_APP_TITLE === 'dev') {
    baseUrl = "http://192.168.10.203:8769/"
} else if (process.env.VUE_APP_TITLE === 'prod') {
    baseUrl = "https://gateway.fitalent.com.cn"
} else if (process.env.VUE_APP_TITLE === 'test') {
    baseUrl = "https://test.gateway.fitalent.com.cn"
}
export default baseUrl;