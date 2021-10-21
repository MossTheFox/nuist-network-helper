const fs = require('fs');
const { runNetworkMonitor } = require('../intervals/networkMonitor');
const { logoutRequest, checkNetworkStatus, loginRequest } = require('../scripts/apiTools');
const configJSON = require('../config.json');

const router = require('express').Router();

/** 全局的几个设置项 */
const nuistConfig = {
    port: 80,
    username: '',
    password: '',
    channel: '',
    autoLogin: true,
    ...configJSON
}

var intervalController = nuistConfig.autoLogin ? runNetworkMonitor({
    username: nuistConfig.username,
    password: nuistConfig.password,
    channel: nuistConfig.channel
}) : null;

/** 保存设置到本地用 */
async function saveConfig() {
    try {
        fs.writeFile(`${__dirname}/../config.json`, JSON.stringify(nuistConfig, null, 4), () => console.log('本地配置项已保存。'));
    } catch (err) {
        console.log(err);
        console.log('*配置项没有被保存到本地。');
    }
}

/** 获取网络状态 */
router.get('/network', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    try {
        var stat = await checkNetworkStatus();
        switch (typeof stat) {
            case 'string':
                res.send({
                    code: 'ok',
                    message: '已登录，公网 ip: ' + stat
                });
                return;
            case 'boolean':
                if (stat) {
                    res.send({
                        code: 'ok',
                        message: '未登录，验证服务器在线。'
                    });
                    return;
                } else {
                    res.send({
                        code: 'ok',
                        message: '无网络，验证服务器不可用。'
                    });
                }
            default:
                return;
        }
    } catch (err) {
        res.status(500).send({
            code: 500,
            message: '服炸了'
        });
    }
});

/** 获取设置状态 */
router.get('/config', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({
        code: 'ok',
        data: {
            ...nuistConfig,
            password: "* Protected *"
        }
    });
});

/** 配置用户名与密码 */
router.post('/set-user-info', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    if (req.body.username && req.body.password && req.body.channel) {
        nuistConfig.password = req.body.password;
        nuistConfig.username = req.body.username;
        nuistConfig.channel = req.body.channel;
        res.send({
            code: 'ok',
            message: '已更新使用的帐户数据。'
        });
        if (typeof intervalController === 'function') {
            intervalController();
            intervalController = null;
        }
        if (nuistConfig.autoLogin) {
            intervalController = runNetworkMonitor({
                username: nuistConfig.username,
                password: nuistConfig.password,
                channel: nuistConfig.channel
            });
        }
        saveConfig();
    } else {
        res.send({
            code: 'not ok',
            message: '缺少必要的字段。'
        });
    }
});

/** 获取自动登录状态 */
router.get('/auto-login-status', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({
        code: 'ok',
        autoLogin: nuistConfig.autoLogin
    });
});

/** 开关自动登录 */
router.post('/set-auto-login', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    if (req.body.autoLogin != null) {
        if (req.body.autoLogin) {
            // on
            nuistConfig.autoLogin = true;
            if (typeof intervalController === 'function') {
                intervalController();
            }
            intervalController = runNetworkMonitor({
                username: nuistConfig.username,
                password: nuistConfig.password,
                channel: nuistConfig.channel
            });
            res.send({
                code: 'ok',
                message: '已启用自动登录。'
            });
            saveConfig();
        } else {
            // off
            if (typeof intervalController === 'function') {
                intervalController();
            }
            nuistConfig.autoLogin = false;
            res.send({
                code: 'ok',
                message: '已关闭自动登录。'
            });
            saveConfig();
        }

    } else {
        res.send({
            code: 'not ok',
            message: '缺少必要的字段。'
        });
    }
});

/** 单次验证 */
router.post('/single', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    try {
        if (req.body.username && req.body.password && req.body.channel) {
            var stat = await checkNetworkStatus();
            if (!stat) {
                // 无网络状态下
                res.send({
                    code: 'not ok',
                    message: '当前无网络，无法连接到验证服务器。'
                });
                return;
            }
            try {
                await loginRequest(req.body.username, req.body.password, req.body.channel);
                res.send({
                    code: 'ok',
                    message: '登录成功！'
                });
            } catch (err) {
                res.send({
                    code: 'not ok',
                    message: '验证失败。'
                })
            }
        } else if (req.body.useDefault) {
            try {
                await loginRequest(nuistConfig.username, nuistConfig.password, nuistConfig.channel);
                res.send({
                    code: 'ok',
                    message: '登录成功！'
                });
            } catch (err) {
                res.send({
                    code: 'not ok',
                    message: '验证失败。'
                })
            }
        } else {
            res.send({
                code: 'ok',
                message: '缺少必要的字段。'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            code: 500,
            message: '服炸了.'
        });
    }
});

/** 注销操作之类的 */
router.post('/action', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    try {
        if (req.body.action === 'logout') {
            // 先检查网络状态
            var stat = await checkNetworkStatus();
            if (!stat) {
                // 无网络状态下
                res.send({
                    code: 'not ok',
                    message: '当前无网络。'
                });
                return;
            }
            await logoutRequest();
            res.send({
                code: 'ok',
                message: '已登出'
            });
        } else {
            res.send({
                code: 'not ok',
                message: '无效请求'
            });
        }
    } catch (err) {
        res.status(500).send({
            code: 500,
            message: '服炸了。'
        });
    }
});

module.exports = router;