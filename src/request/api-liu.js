/**   
 * api接口统一管理
 */
import request, {get, post } from './http'

//获取体检报告
export function GetReportList(pararm) {
    return request({
        url:'/gymDevice/device/physical/allTest/'+pararm,
        method: 'get',
    })
}

//团课详情
export function GetLeagurClassList(p) {
    return request({
        url:'/gymCoach/gymAndClubManager/appTeamClass/selectByPrimaryKey',
        method: 'get',
        params:p
    })
}

//判断预约状态

export function GetAppointmentStatus(p) {
    return request({
        url:'/gymCoach/gymAndClubManager/teamClassReservation/selectByUserId',
        method: 'get',
        params:p
    })
}

//提交预约状态
export function UpateAppointmentStatus(p) {
    return request({
        url:'/gymCoach/gymAndClubManager/teamClassReservation/insertSelective',
        method: 'post',
        data:p
    })
}

//更新预约状态
export function UpertAppointmentStatus(p) {
    return request({
        url:'/gymCoach/gymAndClubManager/teamClassReservation/updateByCouserId',
        method: 'post',
        data:p
    })
}

//我的团课区状态
export function GetLeagurClassStatus(p){
    return request({
        url:'/gymCoach/gymAndClubManager/appTeamClass/selectMyReservationByCourseId',
        method:'get',
        params:p
    })
}

//训练营详情
export function GetTrainingCamp(p) {
    return request({
        url:'/gymCoach/gymAndClubManager/appTrainingCamp/selectByPrimaryKey',
        method: 'get',
        params:p
    })
}

//判断状态
export function GetTrainingCampStatus(p){
    return request({
        url:'/gymCoach/gymAndClubManager/appTrainingCamp/selectWhetherToBuy',
        method: 'get',
        params:p
    })
}
//生成训练营订单
export function AddOrder(p) {
    return request({
        url:'/gym-order/order',
        method: 'post',
        data:p
    })
}

//我的训练营详情
export function GetMeTrainingCamp(p){
    return request({
        url:'/gymCoach/gymAndClubManager/coach/selectHistoryByUserId',
        method:'get',
        params:p
    })
}

//优惠券列表
export function GetCouponRecordList(params){
    return request({
        url:'/gymManager/manager/couponRecord/listCouponRecordVoByBuyInfo',
        method:'get',
        params
    })
}

//会员判断
export function IsVIP(userId){
    return request({
        url:'/gymApi/gymApi/membership/getExpireByUserId/'+userId,
        method:'get',
    })
}

//会员列表
export function GetVipList(){
    return request({
        url:'/gymApi/gymApi/membershipCard/listAllShow',
        method:'get',
    })
}

//会员详情
export function GetVipDetail(uid){
    return request({
        url:'/gymApi/gymApi/membershipCard/'+uid,
        method:'get',
    })
}

export function AddOrderMen(p){
    return request({
        url:'/gym-order/order/mem',
        method:'post',
        data:p
    })
}

//判断是否人脸认证
export function HaveHeadAuth(userId){
    return request({
        url:'/gymApi/gymApi/customer/haveHeadAuth/'+userId,
        method:'get',
    })
}

//团购列表
export function GroupList(){
    return request({
        url:'/gymManager/manager/groupRule/listGroupRuleForH5',
        method:'get',
    })
}
//年会员详情
export function YearDetail(id){
    return request({
        url:'/gymManager/manager/groupRule/'+id,
        method:'get',
    })
}

//订单详情
export function GroupDetail(params){
    return request({
        url:'/gymManager/manager/groupRule/getGroupRuleByIdAndUser',
        method:'get',
        params
    })
}

//狂欢详情
export function GroupShopDetail(id){
    return request({
        url:'/gymManager/manager/groupActivity/getDetailByIdForH5/'+id,
        method:'get',
    })
}

//生成口令
export function PostTokenId(params){
    return request({
        url:'/gymManager/manager/command',
        method:'post',
        data:params
    })
}

//获取订单详情
export function GroupOrderDetail(params){
    return request({
        url:'/gymManager/manager/groupActivity/groupActivityForOrderVo',
        method:'get',
        params
    })
}

//生成订单
export function GroupOrder(params){
    return request({
        url:'/gymManager/manager/groupActivity',
        method:'post',
        params
    })
}




