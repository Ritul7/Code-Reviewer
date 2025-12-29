const aiService = require("../services/ai.service");    //Controllers handle HTTP logic, whereas servies handles business logic. Constroller should not talk to gemini directly.

module.exports.getReview = async (req,res)=>{
    const code = req.body.code;                     // 'body' for POST route 

    if(!code){
        return res.status(400).send("Code is requried!!");
    }

    const response = await aiService(code);

    res.send(response);
}