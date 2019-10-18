var mvs = require("Matchvs");
function MatchvsEngine() {
}

/**
 * 初始化
 * @param channel 渠道 例如Matchvs
 * @param platform 平台 例如'alpha ,release'
 * @param gameID 游戏ID
 */
MatchvsEngine.prototype.init = function () {
    const {
        channel, platform, gameID, appKey, gameVersion
    } = $config.matchvsConfig
    var result = mvs.engine.init(mvs.response, channel, platform, gameID, appKey, gameVersion);
    console.log(this.engineCode(result, 'init'));
    return result;
}

/**
 * 注册
 * @returns {number|*}
 */
MatchvsEngine.prototype.registerUser = function () {
    var result = mvs.engine.registerUser();
    console.log("注册", this.engineCode(result, 'init'));
    return result;
};

/**
 * 注册
 * @param userID
 * @param token
 * @returns {DataView|*|number|void}
 */
MatchvsEngine.prototype.login = function () {
    const {
        userID,
        token
    } = $config.matchvsConfig
    var DeviceID = 'matchvs';
    var result = mvs.engine.login(userID, token, DeviceID);
    $logger.log(this.engineCode(result, 'login'))
    return result;
};

/**
 * 随机匹配
 * @param maxNumber 房间最大人数
 * @returns {number}
 */
MatchvsEngine.prototype.joinRandomRoom = function (maxNumber = $config.matchvsConfig.maxNumber) {
    var result = mvs.engine.joinRandomRoom(maxNumber, $config.matchvsConfig.userName + '进入了房间');
    console.log("随机匹配result" + result);
    return result;
};

/**
 * 关闭房间
 * @returns {number}
 */
MatchvsEngine.prototype.joinOver = function () {
    var result = mvs.engine.joinOver("关闭房间");
    console.log("joinOver result" + result);
    return result;
};

/**
 * 发送消息
 * @param msg
 * @returns {*}
 */
MatchvsEngine.prototype.sendEvent = function (msg) {
    var data = mvs.engine.sendEvent(msg);
    // console.log("发送信息 result"+ data.result);
    return data.result;
};

/**
 * 离开房间
 * @returns {*|void|number}
 */
MatchvsEngine.prototype.leaveRoom = function () {
    // var obj = {name:Glb.name,profile:'主动离开了房间'};
    var result = mvs.engine.leaveRoom('离开房间');
    // console.log(Glb.name+"主动离开房间result"+result);
    return result;
};

MatchvsEngine.prototype.logout = function () {
    var result = mvs.engine.logout('注销');
    return result;
};


/**
 * 离开房间
 * @returns {*|void|number}
 */
MatchvsEngine.prototype.unInit = function () {
    // var obj = {name:Glb.name,profile:'主动离开了房间'};
    var result = mvs.engine.uninit();
    // console.log(Glb.name+"主动离开房间result"+result);
    return result;
};

MatchvsEngine.prototype.engineCode = function (code, engineName) {
    switch (code) {
        case 0:
            return engineName + '调用成功'
        case -1:
            return engineName + '调用失败'

        case -2:
            return '尚未初始化，请先初始化再进行' + engineName + '操作'

        case -3:
            return '正在初始化，请稍后进行' + engineName + '操作'

        case -4:
            return '尚未登录，请先登录再进行' + engineName + '操作'

        case -5:
            return '已经登录，请勿重复登陆'

        case -6:
            return '尚未加入房间，请稍后进行' + engineName + '操作'

        case -7:
            return '正在创建或者进入房间,请稍后进行' + engineName + '操作'

        case -8:
            return '已经在房间中'

        case -20:
            return 'maxPlayer超出范围 0 < maxPlayer ≤ 20'

        case -21:
            return 'userProfile 过长，不能超过512个字符'

        case -25:
            return engineName + 'channel 非法，请检查是否正确填写为 “Matchvs”'

        case -26:
            return engineName + '：platform 非法，请检查是否正确填写为 “alpha” 或 “release”'

    }
}


module.exports = new MatchvsEngine();