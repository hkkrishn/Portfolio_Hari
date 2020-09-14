//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: action to send data back from create project page to db

import axios from 'axios';
import {useApiHandler} from '@/actions'
import useSWR from 'swr';
import { fetcher } from '@/actions';

const createPortfolio=(data)=> {
  return axios.post('/api/v1/portfolios', data);
}

const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data);


export const useCreatePortfolio = ()=>{
  return useApiHandler(createPortfolio)
}
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);

export const useGetPortfolio = (id) => {
  console.log('GET PORTFOLIO')
  const { data, error, ...rest} = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);

  return { data, error, loading: !data && !error, ...rest};
}