require("dotenv").config()              //.env se process.env me variables load hue hai for their usage
const app = require("./src/app");       //imports the express application (waha sirf server create hua h)

app.listen(3000, ()=>{                  //app.listen se server start hota hai
    console.log('Server is running on http://localhost:3000');
})  