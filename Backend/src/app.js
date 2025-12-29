const express = require("express");
const aiRoutes = require("./routes/ai.routes");         // "/ai" se related routes import kre hai 'aiRoutes' name se!!
const cors = require("cors");

const app = express();      //express() isse ek server create hota hai(express application instance), use app me store krdete hai

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{           //testing route
    res.send("Hello");
})

app.use('/ai', aiRoutes);           //Any request starting with /ai will be handled by aiRoutes.

module.exports = app;   