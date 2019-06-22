/**   
 * 运营接口统一管理
 */
import request from  './http'
const managerBaseUrl = "/gymManager"
//根据ID获取俱乐部详情

export function getClubDetail(data) {
    return request({
        url: managerBaseUrl + '/manager/clubInfo/' + data,
        method: 'get',
    })
}

export function getH5Config() {
    return request({
        url: managerBaseUrl + '/manager/h5Config',
        method: 'get',
    })
}