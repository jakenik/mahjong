// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var engine = require('../sdk/Matchvs/MatchvsEngine');
cc.Class({
    extends: cc.Component,

    properties: {
        wxLoginButton: cc.Button,
        visitorsLogin: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.wxLoginButton.node.on('click', this.login, this);
    },

    /**
     * 登录
     */
    login() {
        engine.login();
        $logger.log('登录的账号userID是:', $config.matchvsConfig.userID);
    }
    // update (dt) {},
});
