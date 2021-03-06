//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the configuration file for our next.js



//handled by node.js
const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({silent:true}));
    //silent key set to true set to true suppresses warnings
    return config;
  },
  env:{
    NEXT_PUBLIC_DEVELOPMENT_AUTH0_NAMESPACE:process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_NAMESPACE
  }
}