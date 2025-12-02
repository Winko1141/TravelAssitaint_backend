const OpenAI = require("openai");
const {apiKey} = require("../config/defualt").aliyun;

const openai = new OpenAI(
    {
        apiKey: apiKey,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
);

class ChatController {
    // 对话，流式输出
    async chatMessage(ctx) {
        const completion = await openai.chat.completions.create({
        model: "qwen-plus",  //此处以qwen-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages: [
            { role: "system", content: "你的名字是云宝，是一个智能助手，你可以回答用户关于旅游的问题。" },
            { role: "user", content: "你是谁？" }
        ],
    });
     console.log(JSON.stringify(completion))
    }
}
module.exports = new ChatController();