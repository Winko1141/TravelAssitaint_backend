class UserController {

    // 用户注册
    // async register(req, res) {
    //     const { username, password } = req.body;
    //     const user = await User.create({ username, password });
    //     res.json(user);
    // }

    // 用户登录
    async wxLogin(){
        console.log("123");
        
    }
}

module.exports = new UserController();