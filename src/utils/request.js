import axios from 'axios'
import { Message, MessageBox, Loading } from 'element-ui'
import store from '../store'
import { getToken, removeToken } from '@/utils/auth'
import { Logout } from '@/api/api'
import router from '@/router'

// 创建axios实例

const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 50000, // 请求超时时间
})
service.interceptors.request.use(config => {
    if (store.getters.token) {
        // config.headers['access_token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (!sessionStorage.getItem('clubId')) {
        // alert(1)
        // const that = router
        // console.log(that,"fdd")
        // sessionStorage.clear()
        // removeToken("__token__")
        // location.href = './login'
        // var that = this
        // console.log(that.$router,"fuxk")
        // that.$router.push('./login')
    }
    // config.headers['access_token'] = getToken()
    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(

    response => {
        // console.log(response)
        if (response.data.code !== 2000) {
            if (response.data.code == 1006) {
                MessageBox('输入三次密码错误，冻结三十分钟', '提示', {
                    confirmButtonText: '确定',
                    // cancelButtonText: '取消',
                    center: true,
                }).then(() => {
                    // Logout().then(res => {
                    //     removeToken("__token__")
                    //     location.reload()
                    // })
                }).catch(() => {
                });
                let loadingInstance = Loading.service();
                loadingInstance.close();
            } else if (response.data.code == 10010) {
                let loadingInstance = Loading.service();
                loadingInstance.close();
                Message({
                    message: response.data.message,
                    type: 'error',
                    duration: 5 * 1000
                })
            } else {
                Message({
                    message: response.data.message,
                    type: 'error',
                    duration: 5 * 1000
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        if (error.response.status) {
            Message({
                message: '服务器异常',
                type:'error',
                duration: 1000,
                forbidClick: true
            }); 
            return Promise.reject(error.response);
        }
    }
)

export default service