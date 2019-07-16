import request from '@/utils/request'

//获取token
const managerId = sessionStorage.getItem("managerId")
const clubId = sessionStorage.getItem('clubId')
export const getToken = function() {
        let info = sessionStorage.getItem('__token__')
        if (info) {
            info = JSON.parse(info)
        }
        return {
            access_token: info
        }
    }
    //根据时间查询当天空闲段(训练营模块)
export function QueryByTime(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampLine/selectByFree',
        method: 'get',
        params
    })
}
//新增排课课程
export function newTrainingSchedule(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassLine/insertSelective',
        method: 'post',
        data: params
    })
}
//商户平台根据时间查询一周的排课时间
export function SearchforAweek(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassLine/selectByDate',
        method: 'get',
        params
    })
}

//商户平台修改排课时间
export function newrelpecTime(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassLine/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}

//团课取消排课
export function editLeagueTeaching(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassBusiness/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}
//训练营取消排课
export function CancelclassArrangement(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampBusiness/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}
//获取预约管理列表数据
export function getBookingManagement(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassReservation/selectByCondition',
        method: 'get',
        params
    })
}
//根据clubId获取教室
export function getClassRoom(params) {
    return request({
        url: 'gymClubCms/clubCms/classRoom/selectItemByClub/' + clubId,
        method: 'get',
    })
}

//获取俱乐部
export function getClubS() {
    return request({
        url: 'gymManager/manager/clubInfo/listSelectItem',
        method: 'get',
    })
}

//团课新建时获取的课程名称下拉列表
export function getCoursesName() {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassOperate/selectAllList',
        method: 'get',
    })
}

//团课新建时根据课程名Id获取图片
export function CoursesNameGetImgs(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassOperate/selectByPrimaryKey',
        method: 'get',
        params
    })
}

//课程类别

export function getCourseType() {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampOperate/selectAllType',
        method: 'get',
    })
}
//训练营新建时获取的课程名称下拉列表
export function getCoursesNameTwo(p) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampOperate/selectAllList',
        method: 'get',
        params: p
    })
}

//团课新建时根据课程名Id获取图片
export function CoursesNameGetImgsTwo(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampOperate/selectByPrimaryKey',
        method: 'get',
        params
    })
}

//课表管理（课程下拉列表 查询）
export function selectTimetable(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/timeTable/selectTimeTable',
        method: 'get',
        params
    })
}

//课表管理（课程下拉列表 查询）
export function queryTimetableList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/timeTable/selectAllCourseByRoomId',
        method: 'get',
        params
    })
}

//获取优惠卷
export function getCoupon(data) {
    return request({
        url: 'gymManager/manager/coupon',
        method: 'get',
        params: data
    })
}
//查询优惠卷详情
export function checkCoupon(params) {
    return request({
        url: 'gymManager/manager/coupon/' + params,
        method: 'get',
    })
}

//获取优惠券记录
export function getCoupoonRecord(data) {
    return request({
        url: 'gymManager/manager/couponRecord',
        method: 'get',
        params: data
    })
}

//获取订单退款详情
export function getRefundInfo(params) {
    return request({
        url: 'gym-order/tradeRefund/orderNo/' + params,
        method: 'get',
    })
}

//获取订单退款手机验证码
export function getMobileCode(mobile, params) {
    return request({
        url: 'gymUtil/gymUtil/verify/' + mobile + '/' + params,
        method: 'POST',
    })
}
//取消排课获取用户信息
export function getCacheClassInfo(data) {
    return request({
        url: 'gymCoach/gymAndClubManager/userCourse/selectByCourseId',
        method: 'get',
        params: data
    })
}