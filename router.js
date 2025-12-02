const Router = require("@koa/router");
const router = new Router();

// 对话
const chat = require("./controller/chat");
router.post("/chatMessage", chat.chatMessage);

// 用户相关
// const user = require("./controller/user");
// 用户登录
// router.post("/wxLogin", user.wxLogin);

module.exports = router;