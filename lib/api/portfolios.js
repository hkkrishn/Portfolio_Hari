//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Class b to retrieve data from API.

import axios from 'axios';

class PortfolioAPI{

// method to get all portfolios
constructor(accessToken) {
     this.config = {}

     if (accessToken) {
       this.config.headers = {
         authorization: `Bearer ${accessToken}`
       }
     }
     this.apiUrl = process.env.NEXT_PUBLIC_DEVELOPMENT_PORTFOLIO_API_URL
   }


getAll= async()=>{
     return await axios.get('http://localhost:3001/api/v1/portfolios')

}

getById(id) {
     return axios.get(`http://localhost:3001/api/v1/portfolios/${id}`)
   }


createPortfolio(data){
     return axios.post('http://localhost:3001/api/v1/portfolios', data,this.config);
   }
}

export default PortfolioAPI