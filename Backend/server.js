require("dotenv").config()
const app = require("./src/app");

app.listen(3000, ()=>{      //app.listen se server start hota hai
    console.log('Server is running on http://localhost:3000');
})  