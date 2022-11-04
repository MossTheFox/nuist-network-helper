const axios = require('axios').default;

/**
 * 检查当前网络状况，如果是无内网连接 + 无外网连接，则返回 false;
 * 有内网连接，返回 true;
 * 有公网连接，直接返回公网 IP
 * (API: https://api.mxowl.com/tools/ua)
 */
async function checkNetworkStatus() {
    try {
        // 检查有无公网连接

        // whatismyipaddress 的 API 已经不再可用
        let getIPViaOwlAPI = async () => {
            var res = await axios.get('https://api.mxowl.com/tools/ua', {
                timeout: 3000
            });
            return res.data?.ip;
        }
        // let getIPViaWhatIsMyIpAddress = async () => {
        //     var res = await axios.get('https://bot.whatismyipaddress.com/', {
        //         timeout: 4000
        //     });
        //     return res.data;
        // }
        var resIP = await getIPViaOwlAPI();

        // var resIP = await getIPViaWhatIsMyIpAddress();
        if (!resIP) {
            throw new Error('反正就出错了。');
        }
        return String(resIP);
    } catch (err) {
        try {
            await getIP();
            return true;
        } catch (err) {
            return false;
        }
    }
}

/**
 * 获取内网 IP，如果是无网络状态等则抛出异常
 */
async function getIP() {
    let res = await axios.get("http://10.255.255.34/api/v1/ip", {
        timeout: 3000
    });
    var resJSON = res.data;
    var ip = resJSON?.data;
    if (!ip) {
        throw new Error("没有接收到 IP。");
    }
    return String(ip);
}

/**
 * 登录校园网
 * @param {String} username 校园网帐户
 * @param {String} password 校园网密码
 * @param {Number} channel 频道，3 - 中国电信
 * @returns 
 */
async function loginRequest(username, password, channel) {
    var ip = await getIP();
    res = await axios.post("http://10.255.255.34/api/v1/login", JSON.stringify({
        channel: String(channel),
        ifautologin: "0",
        pagesign: "secondauth",
        password: String(password),
        username: String(username),
        usripadd: ip,
    }));
    if (res.data?.message === "ok") {
        console.log(`[${new Date().toLocaleString()}] 成了`);
        return;
    }
    throw new Error(`[${new Date().toLocaleString()}] 不成。`);
}
/** 注销登录，因为完全不验证用户名和密码，所以可以不用给参数。字段保留有值就行
 * @param {String} username 校园网帐户
 * @param {String} password 校园网密码
 * @param {Number} channel 频道
 */
async function logoutRequest(username = '1145141919', password = '810', channel = '0') {
    var ip = await getIP();
    var res = await axios.post("http://10.255.255.34/api/v1/logout", JSON.stringify({
        channel: String(channel),
        ifautologin: "0",
        pagesign: "thirdauth",
        password: String(password),
        username: String(username),
        usripadd: ip
    }));
}

const exp = {
    checkNetworkStatus,
    getIP,
    loginRequest,
    logoutRequest
}

module.exports = exp;
