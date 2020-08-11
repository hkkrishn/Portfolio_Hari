//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is where we will specify dynamically created routes/this is for next.js version 7 and before and is designed for backward compatibility


const routes = require('next-routes')
module.exports = routes()
.add('portfolio','/portfolios/:id')
