//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Modular functions for separation of concerns

import useSWR from 'swr'


 //function to fetch data for SWR,this will result data from cache intiially then the endpoint
  export const fetcher = (url)=>
  fetch(url)
  .then( async res=>{
    const result = await res.json()
    if(res.status !== 200 ){
      return Promise.reject(result);
    }else{
      return result
    }
   });
