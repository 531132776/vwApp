/**   
 * 设备接口统一管理
 */
import request from  './http'
const deviceBaseUrl = "/gymDevice/device/"
//根据ID获取俱乐部详情


export function countPeopleByClub(data) {
    return request({
        url: deviceBaseUrl + 'inAndOut/countPeopleByClub/' + data,
        method: 'get',
    })
}
