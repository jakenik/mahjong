// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var engine = require('../sdk/Matchvs/MatchvsEngine'); // 框架实例
var response = require("../sdk/Matchvs/MatchvsResponse"); // 事件响应
cc.Class({
    extends: cc.Component,
    init() {
        engine.init();
    },
    initMatchvsEvent(self) {
        //在应用开始时手动绑定一下所有的回调事件
        response.bind();
        response.init(self);
        this.node.on($config.matchvsMsg.MATCHVS_INIT, this.initResponse, this);
        this.node.on($config.matchvsMsg.MATCHVS_REGISTER_USER, this.registerUserResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_LOGIN, this.loginResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_JOIN_ROOM_RSP, this.joinRoomResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_JOIN_ROOM_NOTIFY, this.joinRoomNotify, this);
        // this.node.on($config.matchvsMsg.MATCHVS_JOIN_OVER_RSP, this.joinOverResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_JOIN_OVER_NOTIFY, this.joinOverNotify, this);
        // this.node.on($config.matchvsMsg.MATCHVS_SEND_EVENT_RSP, this.sendEventResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_SEND_EVENT_NOTIFY, this.sendEventNotify, this);
        // this.node.on($config.matchvsMsg.MATCHVS_LEAVE_ROOM, this.leaveRoomResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_LEAVE_ROOM_NOTIFY, this.leaveRoomNotify, this);
        // this.node.on($config.matchvsMsg.MATCHVS_LOGOUT, this.logoutResponse, this);
        // this.node.on($config.matchvsMsg.MATCHVS_ERROE_$config.matchvsMsg, this.errorResponse, this);
    },
    /**
     * 初始化回调
     * @param info
     */
    initResponse(status) {
        if (status == 200) {
            $logger.log('initResponse：初始化成功，status：' + status);
            engine.registerUser();
        } else {
            $logger.log('initResponse：初始化失败，status：' + status)
        }
    },
    /**
     * 注册回调
     * @param userInfo
     */
    registerUserResponse(userInfo) {
        $logger.log(userInfo)
        if (userInfo.status == 0) {
            $config.matchvsConfig.userID = userInfo.id;
            $config.matchvsConfig.token = userInfo.token;
            $config.matchvsConfig.userName = userInfo.name;
        } else {
            $logger.log('registerUserResponse: 注册用户失败');
        }
    },
    onLoad () {
        this.initMatchvsEvent(this) // 开启全局事件接收器
        this.init()
    }
});
