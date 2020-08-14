//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the configuration file for our next.js



//handled by node.js
const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
}