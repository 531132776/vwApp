//table 时间戳转化为标准时间
export function FormatDay(timestamp, time) {
    const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return time ? Y + M + D + h + m + s : Y + M + D
}

export function FormatTime(timestamp) {
    const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return h + m
}

//时间戳转普通日期时间格式
export function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
    return month + "-" + date
}

export function isvalidUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

export function isEmpty(value, text) {
    if (!value) {
        return this.$message({
            message: text,
            type: 'error',
            duration: 2000
        })
    }
}

let strategys = {
    isNotEmpty: (value, errorMsg) => {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: (value, length, errorMsg) => {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isNum: (value, errorMsg) => {
        var re = /^[0-9]+$/;
        if (value < 0 || value > 99 || !re.test(value)) {
            return errorMsg;
        }
    },
    maxLength: (value, length, errorMsg) => {
        var chineseLenght = get_contain_chinese_number(value)
        if (value.length > length) {
            return errorMsg;
        }
    },
    password8:(value,errorMsg) =>{
        let regStr = /^[a-zA-Z0-9]{8,20}$/;
        if(value.length<8){
            return errorMsg
        }
        if(!regStr.test(value)){
            return errorMsg
        }
    },
    password20:(value,errorMsg) =>{
        let regStr = /^[a-zA-Z0-9]{8,20}$/;
        if(value.length>20){
            return errorMsg
        }
        if(!regStr.test(value)){
            return errorMsg
        }
    },
    password: (value, errorMsg) => {
        let regStr = /^[a-zA-Z0-9]{8,20}$/;
        if (!regStr.test(value)) {
            return errorMsg
        }
    },
    mobileFormat: (value, errorMsg) => { //手机
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    },
    mobileTelephone: (value, errorMsg) => { //手机和固话
        let isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/
        let isMob = /(^1[3|5|8][0-9]{9}$)/;
        if (isPhone.test(value) || isMob.test(value)) {

        } else {
            return errorMsg;
        }
    },
    idCard: (value, errorMsg) => { //手机和固话
        let idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        let isMob = /(^1[3|5|8][0-9]{9}$)/;
        if (!idcardReg.test(value)) {
            return errorMsg;
        }
    },
}

export var Validator = function() {
    this.cache = []; // 保存效验规则
};
Validator.prototype.add = function(dom, rule, errorMsg) {
    var str = rule.split(":");
    this.cache.push(function() {
        // str 返回的是 minLength:6 
        var strategy = str.shift();
        str.unshift(dom); // value添加进参数列表
        str.push(errorMsg); // 把errorMsg添加进参数列表
        return strategys[strategy].apply(dom, str);
    });
};
Validator.prototype.start = function() {
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc() // 开始效验 并取得效验后的返回信息
        if (msg) {
            return msg
        }
    }
};

export var get_contain_chinese_number = function(check_str) {
    var chineseArray = [];
    check_str.replace((/[\u4e00-\u9fa5]/gm), function() {
        var text = arguments[0];
        var index = arguments[arguments.length - 2];
        chineseArray.push({
            text: text,
            index: index
        });
        return text;
    });
    return chineseArray.length;
}