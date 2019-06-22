/**   
 * api接口统一管理
 */
import request, {get, post } from './http'
const coachBaseUrl = "/gymCoach/"

//获取教练list
export function coachList(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/coach/selectByCondition',
        method: 'get',
        params: data
    })
}
//获取教练list
// export const coachList = p => get('/gymCoach/gymAndClubManager/coach/selectByCondition', p);

//通过ID查询教练详情
// export const getCoachDetail = p => get('/gymCoach/gymAndClubManager/coach/selectAppByPrimaryKey', p);
export function getCoachDetail(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/coach/selectAppByPrimaryKey',
        method: 'get',
        params: data
    })
}

//通过ID教练所售课程
// export const getCourseClass = p => get('/gymCoach/gymAndClubManager/coach/selectCourseByName', p);
export function getCourseClass(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/coach/selectCourseByName',
        method: 'get',
        params: data
    })
}
//商户平台训练营根据时间查询一周的排课时间
export const SearchforAweek = p => get('/gymCoach/gymAndClubManager/trainingCampLine/selectByDate', p);

//私教课详情
// export const detailSprivatLessons = p => get('/gymCoach/gymAndClubManager/appPrivateCourse/selectAppByPrimaryKey', p);

export function detailSprivatLessons(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/appPrivateCourse/selectAppByPrimaryKey',
        method: 'get',
        params: data
    })
}

//私教体验课详情
// export const privateTasteCourse = p => get('/gymCoach/gymAndClubManager/appPrivateTasteCourse/selectAppByPrimaryKey', p);
export function privateTasteCourse(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/appPrivateTasteCourse/selectAppByPrimaryKey',
        method: 'get',
        params: data
    })
}

//包月私教详情
// export const privateMonthCourse = p => get('/gymCoach/gymAndClubManager/appPrivateMonthCourse/selectAppByPrimaryKey', p);
export function privateMonthCourse(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/appPrivateMonthCourse/selectAppByPrimaryKey',
        method: 'get',
        params: data
    })
}

//课程历史记录
// export const courseHistoricarecord = p => get('/gymCoach/gymAndClubManager/coach/selectHistoryByUserId', p);
export function courseHistoricarecord(data) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/coach/selectHistoryByUserId',
        method: 'get',
        params: data
    })
}

//生成订单
// export const generateOrder = p => post('/gym-order/order', p);
export function generateOrder(p) {
    return request({
        url: '/gym-order/order',
        method: 'post',
        data: p
    })
}
//私教课签到
export function postPrivateEducation(p) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/PrivateCourseSign/insertSelective',
        method: 'post',
        data: p
    })
}


//私教课签到先查询
export function postPrivateEducationCheck(p) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/PrivateCourseSign/selectByUserId',
        method: 'get',
        params: p
    })
}
//私教体验课签到先查询
export function postPrivateEducationexCheck(p) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/privateTasteCourseSign/selectByUserId',
        method: 'get',
        params: p
    })
}
//私教体验课签到
export function postPrivateEducationexPerience(p) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/privateTasteCourseSign/insertSelective',
        method: 'post',
        data: p
    })
}

//包月私教课签到
// export function postPrivateMonthEducatione(p) {
//     return request({
//         url: coachBaseUrl + 'gymAndClubManager/privateMonthCourseSign/insertSelective',
//         method: 'post',
//         data: p
//     })
// }

//私教课签到查询一个小时只能签到一次,查到数据可以再签
export function postPrivateMonth(p) {
    return request({
        url: coachBaseUrl + 'gymAndClubManager/privateMonthCourseSign/selectByUserId',
        method: 'post',
        data: p
    })
}

//头部健身数据
export function headFitnessData(p) {
    return request({
        url: 'gymApi/gymApi/motionData/totalData/' + p,
        method: 'get',
    })
}

//综合健身数据
export function ComprehensiveData(p, s) {
    return request({
        url: 'gymApi/gymApi/motionData/motionDayData/' + p + '/' + s,
        method: 'get',
    })
}

//健身数据详情头部list
export function siveDataDetails(p, s) {
    return request({
        url: 'gymApi/gymApi/motionData/motionDayData/queryList/' + p + '/' + s,
        method: 'get',
    })
}

//健身数据详情运动数据
export function typeDetails(p) {
    return request({
        url: 'gymApi/gymApi/motionData/queryMotionDataByUserAndType',
        method: 'get',
        params: p
    })
}

//获取包月私教的购买数量
export function getMonthCoachNumb(p) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateMonthCourse/selectByCourseId',
        method: 'get',
        params: p
    })
}

//查询个人某月中运动的天数list
export function getSameMonthList(n, p) {
    return request({
        url: 'gymApi/gymApi/motionData/motionDayByMonth/' + n + '/' + p,
        method: 'get',
    })
}