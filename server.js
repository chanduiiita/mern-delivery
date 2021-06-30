const express = require('express');
const Pizza=require('./models/pizzaModels')
const app = express();
const db=require("./db.js");
app.use(express.json());
const path=require('path')
const userRoute=require('./routes/userRoute')
const pizzasRoute=require('./routes/pizzasRoute')
const ordersRoute = require('./routes/ordersRoute')
app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/' , ordersRoute)
if(process.env.NODE_ENV==='production'){
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}
// app.get("/", (req, res) => {
//     res.send('Hello World!'+port)
// });


const port=process.env.PORT||8000;



app.listen(port, () => `Server running on port port 🔥`)