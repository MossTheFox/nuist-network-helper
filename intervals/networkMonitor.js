const axios = require('axios').default;
const apiTools = require('../scripts/apiTools');

const intervalConfig = {
    lastAuthTime: 0
}
/**
 * 启动定时任务，返回取消定时任务的函数方法。
 * @param config 用户信息，字段有三个，别漏了
 * @param runFrom 定时任务开始的小时数，默认 7
 * @param runEndAt 定时任务结束的小时数，默认 8
 * @returns {Function} 移除定时任务的函数
 */
function runNetworkMonitor(config = {
    username: '0',
    password: '0',
    channel: '3'
}, runFrom = 7, runEndAt = 8, skipHoursWhenSucceed = 2) {
    console.log('启动定时任务...');
    var monitor = setInterval(async () => {
        // 这个事件默认只在早晨 7 点到 8 点之间执行，且 2 小时内不重复执行
        if (new Date().getHours() < runFrom || new Date().getHours() >= runEndAt || Date.now() - intervalConfig.lastAuthTime < 1000 * 60 * 60 * skipHoursWhenSucceed) {
            return;
        }
        var networkStatus = await apiTools.checkNetworkStatus();
        switch (typeof networkStatus) {
            case 'boolean':
                if (networkStatus) {
                    // 有内网、无公网，准备做事
                    try {
                        await apiTools.loginRequest(config.username, config.password, config.channel);
                        intervalConfig.lastAuthTime = Date.now();
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    // 无内外网连接，啥都不做。
                    console.log('无法连接到认证服务器, 稍后将重试...');
                    return;
                }
                break;
            case 'string':
                // 说明此时已经登录好了，也啥都不做
                console.log('已完成认证');
                intervalConfig.lastAuthTime = Date.now();
                break;
            default:
                break;
        }
    }, 1000 * 30);

    return () => {
        clearInterval(monitor);
        console.log('清除定时任务...');
    };
}

module.exports = {
    runNetworkMonitor
}