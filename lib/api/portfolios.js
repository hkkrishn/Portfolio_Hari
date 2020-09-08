//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Class b to retrieve data from API.

import axios from 'axios';

class PortfolioAPI{

// method to get all portfolios


getAll= async()=>{
     return await axios.get('http://localhost:3001/api/v1/portfolios')

}

getById(id) {
     return axios.get(`http://localhost:3001/api/v1/portfolios/${id}`)
   }
}

export default PortfolioAPI