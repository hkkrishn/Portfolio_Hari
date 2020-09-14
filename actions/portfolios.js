//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: action to send data back from create project page to db

import axios from 'axios';
import {useApiHandler} from '@/actions'

const createPortfolio=(data)=> {
  return axios.post('/api/v1/portfolios', data);
}


export const useCreatePortfolio = ()=>{
  return useApiHandler(createPortfolio)
}