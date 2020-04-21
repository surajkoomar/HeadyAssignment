const express=require('express')
const app=express()
const port=process.env.PORT || 3000
require('./db/mongoose')
const categoryRouter=require('./router/categories')
const productRouter=require("./router/products")
app.use(express.json());

app.use(categoryRouter);
app.use(productRouter)



app.listen(port,function(){

    console.log('PORT '+port+' is up and running')
})