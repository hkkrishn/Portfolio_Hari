//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Modular functions for separation of concerns


import {useState} from 'react';



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


export const  useApiHandler=(apiCall)=>{
  //call useState to save request state vals
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false
  });
  const handler = async (...data) => {
    //set the initial request object
    setReqState({error: null, data: null, loading: true});
    try {
      const json = await apiCall(...data);
      setReqState({error: null, data: json.data, loading: false});
      return json.data;
    } catch(e) {
      //check if there is an error resonse and response message else return custom message
      const message = (e.response && e.response.data) || 'Ooops, something went wrong...';
      //add the message to the request object.
      setReqState({error: message, data: null, loading: false});
      return Promise.reject(message);
    }
  }
  //return the array that return a function and the request object which
  //includes data
  //spread the request object to grab all fieldsß
  return [handler, {...reqState}]
}
