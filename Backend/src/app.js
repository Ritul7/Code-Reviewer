const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express();      //express() isse ek server create hota hai, use app me store krdete hai

app.get('/', (req,res)=>{
    res.send("Hello");
})

app.use('/ai', aiRoutes);

module.exports = app;