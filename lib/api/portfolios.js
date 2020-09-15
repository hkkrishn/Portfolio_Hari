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

 //function that sends fetch request to update portfolio
 createPortfolio(data,id){
  return axios.post(`http://localhost:3001/api/v1/portfolios/${id}`, data,this.config);
}
//function that executes patch request to update doc on db
update(id, data) {
  return axios.patch(`http://localhost:3001/api/v1/portfolios/${id}`, data, this.config);
}

delete(id) {
  return axios.delete(`http://localhost:3001/api/v1/portfolios/${id}`, this.config);
}
}

export default PortfolioAPI