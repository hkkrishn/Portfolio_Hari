//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: action to send data back from create project page to db

import axios from 'axios';
import { useState } from 'react';

const createPortfolio=(data)=> {
  return axios.post('/api/v1/portfolios', data);
}

export const  useCreatePortfolio=()=>{
  //call useState to save request state vals
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false
  });
  const createPortfolioHandler = async (...data) => {
    //set the initial request object
    setReqState({error: null, data: null, loading: true});
    try {
      const json = await createPortfolio(...data);
      setReqState({error: null, data: json.data, loading: false});
    } catch(e) {
      //check if there is an error resonse and response message else return custom message
      const message = (e.response && e.response.message) || 'There seems to be an error, something went wrong...';
      //add the message to the request object.
      setReqState({error: message, data: null, loading: false});
    }
  }
  //return the array that return a function and the request object which
  //includes data
  //spread the request object to grab all fieldsß
  return [createPortfolioHandler, {...reqState}]
}