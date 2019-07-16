import request from '@/utils/request'

//获取token
const managerId = sessionStorage.getItem("managerId")
//const clubId = sessionStorage.getItem('clubId')
export const getToken = function() {
    let info = sessionStorage.getItem('__token__')
    if (info) {
        info = JSON.parse(info)
    }
    return {
        access_token: info
    }
}

//oss 获取参数
export function GetOssInfo() {
    return request({
        url: '/gym-oss/oss/web',
        method: 'get'
    })
}

//验证码
export function DrawVerifyCode(params) {
    return request({
        url: '/gymUtil/gymUtil/common/drawVerifyCode',
        method: 'get',
        params
    })
}

//登录
export function Login(params) {
    return request({
        url: '/gymClubCms/clubCms/users/loginUsers',
        method: 'post',
        data: params
    })
}

//登出
export function Logout() {
    return request({
        url: '/gymClubCms/clubCms/users/loginOut',
        method: 'get',
    })
}

//俱乐部接口
export function DelClubImage(id) {
    return request({
        url: '/gymManager/manager/clubInfoCommonImage/' + id,
        method: 'delete'
    })
}

export function GetClubDetail(clubId) {
    return request({
        url: '/gymManager/manager/clubInfo/' + clubId,
        method: 'get',
    })
}

export function GetProvincesList() {
    return request({
        url: '/gymUtil/gymUtil/province',
        method: 'get',
    })
}

export function GetStreeList(areaCode) {
    return request({
        url: '/gymUtil/gymUtil/street/' + areaCode,
        method: 'get',
    })
}
export function UpdateClub(params) {
    return request({
        url: '/gymManager/manager/clubInfo/',
        method: 'put',
        data: params
    })
}


export function GetCityList(provincesId) {
    return request({
        url: '/gymUtil/gymUtil/city/' + provincesId,
        method: 'get',
    })
}

export function GetAreaList(cityCode) {
    return request({
        url: '/gymUtil/gymUtil/area/' + cityCode,
        method: 'get',
    })
}

export function GetClubList(params) {
    return request({
        url: '/gymManager/manager/clubInfo',
        method: 'get',
        params,
    })
}
//教室接口
export function GetClassRoomList(params) {
    return request({
        url: '/gymClubCms/clubCms/classRoom',
        method: 'get',
        params
    })
}

export function AddClassRoom(params) {
    return request({
        url: '/gymClubCms/clubCms/classRoom',
        method: 'post',
        data: params
    })
}

export function UpdateClassroom(params) {
    return request({
        url: '/gymClubCms/clubCms/classRoom',
        method: 'put',
        data:params
    })
}

export function DelClassroom(id) {
    return request({
        url: '/gymClubCms/clubCms/classRoom/' + id,
        method: 'delete',
    })
}

export function GetClassroomById(id) {
    return request({
        url: '/gymClubCms/clubCms/classRoom/' + id,
        method: 'get'
    })
}

export function GetClassroomDevice(params) {
    return request({
        url: '/gymDevice/device/physical/device/listByClassRoomAndDeviceType',
        method: 'post',
        data: params
    })
}

//功能区下拉
export function GetFunctionalZoneList() {
    return request({
        url: '/gymManager/manager/functionalZone/listSelectItem',
        method: 'get',
    })
}
//设备类型的下拉
export function GetDeviceTypeSelect() {
    return request({
        url: '/gymManager/manager/deviceType/selectItem',
        method: 'get',
    })
}

//教室的下拉
export function GetClassRoomSelect(clubId,id) {
    return request({
        url: '/gymClubCms/clubCms/classRoom/selectItem/'+ clubId +'/' + id,
        method: 'get',
    })
}

export function GetClassRoomSelectById(clubId) {
    return request({
        url: '/gymClubCms/clubCms/classRoom/selectItemByClub/' + clubId,
        method: 'get',
    })
}

//设备管理
export function GetDeviceList(params) {
    return request({
        url: '/gymDevice/device/physical/device',
        method: 'get',
        params
    })
}

export function UpdateClassroomDevice(params) {
    return request({
        url: '/gymDevice/device/physical/device',
        method: 'put',
        data: params
    })
}

export function DelDevice(id) {
    return request({
        url: '/gymDevice/device/physical/device/' + id,
        method: 'delete',
    })
}

export function AddAllDevice(params) {
    return request({
        url: '/gymDevice/device/physical/device',
        method: 'post',
        data: params
    })
}

//用户列表
export function GetUser(params) {
    return request({
        url: '/gymApi/gymApi/customer',
        method: 'get',
        params
    })
}

export function GetUserDetail(id) {
    return request({
        url: '/gymApi/gymApi/customer/' + id,
        method: 'get',
    })
}
//门禁管理
export function GetAllEntrance(params) {
    return request({
        url: '/gymDevice/device/entrance',
        method: 'get',
        params
    })
}

export function AddEntrance(params) {
    return request({
        url: '/gymDevice/device/entrance',
        method: 'post',
        data: params
    })
}

export function DelEntrance(id) {
    return request({
        url: '/gymDevice/device/entrance/' + id,
        method: 'delete',
    })
}

export function UpdateEntrance(params) {
    return request({
        url: '/gymDevice/device/entrance',
        method: 'put',
        data: params
    })
}

//心率墙
export function GetHeartRateWallList(params) {
    return request({
        url: '/gymDevice/device/heartRateWall',
        method: 'get',
        params
    })
}
// 会员管理
export function GetVipList(params) {
    return request({
        url: '/gymApi/gymApi/membership',
        method: 'get',
        params
    })
}


export function UpsertPassword(params){
    return request({
        url: '/gymClubCms/clubCms/manager/changePassword',
        method: "put",
        data: params
    })
}

export function ForbidDevice(){
    
}

export function UpdateUserInfo(){
    
}

export function GetClubBusiness(){
    
}

export function GetClubTown(){
    
}

export function DisableHeartRateWall(){
    
}

export function DisableEntrance(){
    
}

export function DelUser(){
    
}

export function GetClubCity(){
    
}

export function FreezeUser(){
    
}


export function ResetPassword(id){
   return request({
       url:'/gymClubCms/clubCms/manager/reset/'+id,
       method:'put',
   }) 
}

export function UnfreezeUser(){
    
}

export function DelHeartRateWall(id) {
    return request({
        url: '/gymDevice/device/heartRateWall/' + id,
        method: 'delete',
    })
}

export function AddHeartRateWall(params) {
    return request({
        url: '/gymDevice/device/heartRateWall',
        method: 'post',
        data: params
    })
}

export function GetHeartRateWallTypeByName(name) {
    return request({
        url: '/gymManager/manager/deviceType/getDeviceTypeByName/' + name,
        method: 'get',
    })
}

export function UpdateHeartRateWall(params) {
    return request({
        url: '/gymDevice/device/heartRateWall',
        method: 'put',
        data:params
    })
}
//新增接口

//教练列表
export function GetCoachList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/coach/selectByCondition',
        method: 'get',
        params
    })
}
//新增教练
export function AddCoach(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/coach/insertSelective',
        method: 'post',
        data: params
    })
}

//修改教练
export function UpdateCoach(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/coach/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}

//教练人员
export function GetCoacherList() {
    return request({
        url: 'gymCoach/gymAndClubManager/coach/selectByList',
        method: 'post',
    })
}

//私教体验课
export function GetPraviteExpList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateTasteCourse/selectByCondition',
        method: 'get',
        params
    })
}

//新增私教体验课
export function AddPraviteExpList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateTasteCourse/insertSelective',
        method: 'post',
        data: params
    })
}

export function UpdateCode(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateTasteCourse/selectByCondition',
        method: 'get',
        data: params
    })
}

//修改私教体验课
export function UpdatePraviteExpList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateTasteCourse/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}

//获取私教课列表
export function GetPraviteList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateCourse/selectByCondition',
        method: 'get',
        params
    })
}
//获取下拉教练
export function getCoachs(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/coach/selectByList',
        method: 'post',
        data: params
    })
}

//新增私教课
export function AddPraviteList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateCourse/insertSelective',
        method: 'post',
        data: params
    })
}
//新增训练营排课课程
export function AddTrainingCampInfo(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampBusiness/insertSelective',
        method: 'post',
        data: params
    })
}

//修改私教课
export function UpdatePraviteList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateCourse/updateByPrimaryKey',
        method: 'post',
        data: params
    })
}
//获取训练营排课list数据
export function getTrainingCampData(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampBusiness/selectByCondition',
        method: 'get',
        params
    })
}
//训练营新增排课
export function newTrainingSchedule(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampLine/insertSelective',
        method: 'post',
        data: params
    })
}
//获取包月私教
export function GetPraviteMonList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateMonthCourse/selectByCondition',
        method: 'get',
        params
    })
}

//新增包月私教课
export function AddPraviteMonList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateMonthCourse/insertSelective',
        method: 'post',
        data: params
    })
}

//修改包月私教课
export function UpdatePraviteMonList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/privateMonthCourse/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}

//商户平台训练营根据时间查询一周的排课时间
export function SearchforAweek(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampLine/selectByDate',
        method: 'get',
        params
    })
}


//商户平台训练营修改排课时间
export function newrelpecTime(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampLine/updateByPrimaryKeySelective',
        method: 'post',
        data: params
    })
}

//查询团课排课签到记录信息
export function getLeagueSignInList(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassSign/selectByCondition',
        method: 'get',
        params
    })
}

//查询训练营排课签到记录信息
export function getCheckinTrainingCamp(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/trainingCampSign/selectByCondition',
        method: 'get',
        params
    })
}

//查询私教体验课签到记录信息
export function getPrivateTasteRecord(params) {
    return request({
        url: '/gymCoach/gymAndClubManager/privateTasteCourseSign/selectByCondition',
        method: 'get',
        params
    })
}

//查询私教签到记录信息
export function getPrivateRecord(params) {
    return request({
        url: '/gymCoach/gymAndClubManager/PrivateCourseSign/selectByCondition',
        method: 'get',
        params
    })
}

//查询训练营排课签到记录信息
export function getOrderList(params) {
    return request({
        url: 'gym-order/clubOrder',
        method: 'get',
        params
    })
}
//训练营新增团课排课list信息
export function newAddLeagueclass(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassBusiness/insertSelective',
        method: 'post',
        data: params
    })
}

//查询团课排课list
export function getLeagueclassscheduling(params) {
    return request({
        url: 'gymCoach/gymAndClubManager/teamClassBusiness/selectByCondition',
        method: 'get',
        params
    })
}

//手牌
export function GetHandCardList(params) {
    return request({
        url: '/gym-inventory/handCard',
        method: 'get',
        params
    })
}

//禁用启用
export function UpAndDown(id,status) {
    return request({
        url: '/gym-inventory/handCard/disable/'+id+'/'+status,
        method: 'put',
    })
}

//录入手牌
export function AddHandCard(params){
    return request({
        url:"/gym-inventory/handCard",
        method:'post',
        data:params
    })
}
//录入库存手环
export function AddInventory(params){
    return request({
        url:"/gym-inventory/inventory",
        method:'post',
        data:params
    })
}
//归还手牌
export function ReturnCard(tagId){
    return request({
        url:"/gym-inventory/handCard/return/"+tagId,
        method:'put',
    })
}
//手机验证码啊
export function GetVerifyCode(mobile,type){
    return request({
        url:"/gymUtil/gymUtil/verify/"+mobile+'/'+type,
        method:'post',
    })
}
//领取手牌
export function GetHandCard(params){
    return request({
        url:"/gym-inventory/handCard/receive",
        method:'put',
        params
    })
}
//手牌使用记录
export function GetRcordList(params){
    return request({
        url:"/gym-inventory/handCardUseRecord",
        method:'get',
        params
    })
}

//进销存管理
export function GetInventoryList(params){
    return request({
        url:"/gym-inventory/inventory",
        method:'get',
        params
    })
}

//换货
export function ExchangeCard(params){
    return request({
        url:"/gym-inventory/inventory/Exchange",
        method:'put',
        params
    })
}

//核销
export function WriteOff(params){
    return request({
        url:"/gym-inventory/inventory/writeOff",
        method:'put',
        params
    })
}
//出库记录
export function inventoryRecordList(params){
    return request({
        url:"/gym-inventory/inventory/out",
        method:'get',
        params
    })
}
//商品下拉
export function GetSelectGoods(){
    return request({
        url:"/gym-inventory/productType",
        method:'get',
    })
}

//进出管理
export function GetInAndOut(params){
    return request({
        url:'/gymDevice/device/inAndOut',
        method:'get',
        params
    })
}

//管理员列表
export function GetManagerList(params){
    return request({
        url:'/gymClubCms/clubCms/manager',
        method:'get',
        params
    })
}

export function UpdateManager(params){
    return request({
        url:'/gymClubCms/clubCms/manager',
        method:'put',
        data:params
    })
}

export function AddManager(params){
    return request({
        url:'/gymClubCms/clubCms/manager',
        method:'post',
        data:params
    })
}

export function DelManager(uid){
    return request({
        url:'/gymClubCms/clubCms/manager/'+uid,
        method:'delete',
    })
}

//根据ID查询教练详情

export function getCoachInfo(data) {
    return request({
        url: 'gymCoach/gymAndClubManager/coach/selectByPrimaryKey',
        method: 'get',
        params: data
    })
}

//获取心率强教室列表
export function getHeartSelect(clubId){
    return request({
        url:'/gymClubCms/clubCms/classRoom/selectItem/'+clubId+'/1115582172275798018',
        method:'get'
    })
}

//
export function postOss(params){
    return request({
        url:'https://isportcloud.oss-cn-shenzhen.aliyuncs.com',
        method:'post',
        headers:{'Content-Type':'multipart/form-data'},
        params
    })
}


