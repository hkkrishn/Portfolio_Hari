//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the custom server implementation to create dynamic pages,using express

const express = require('express');
const next = require('next')


const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler();



app.prepare().then(()=>{
    const server = express();
    //handle server requests
    server.all('*',(req,res)=>{
        return handle(req,res)
    })
    //create instance of server in the callback
    const PORT = process.env.PORT || 3000;
    server.listen(PORT,(err)=>{
        if(err){
            console.log(err)
        }
        console.log(`Ready on Port: ${PORT}`)
    })

})
