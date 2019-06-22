/**   
 * 运营接口统一管理
 */
import request, {get } from './http'
const coachBaseUrl = "/gymCoach/"
    //根据ID获取俱乐部详情

export function getTeamClass(data) {
    return request({
        // url: coachBaseUrl + 'gymAndClubManager/appTeamClass/selectAllClassByClubId',
        url: coachBaseUrl + 'gymAndClubManager/appTrainingCamp/selectAllClassTeamByClubId',
        method: 'get',
        params: data
    })
}
export function SearchforAweek(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/trainingCampLine/selectByDate',
        method: 'get',
        params: data
    })
}

export function getCoach(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/appCoach/selectAllCoachByClubId',
        method: 'get',
        params: data
    })
}

export function getTrainingCamp(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/appTrainingCamp/selectAllClassByClubId',
        method: 'get',
        params: data
    })
}