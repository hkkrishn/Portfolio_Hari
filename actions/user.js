//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Modular function to gather user data from Auth0 and pass it to layout

import useSWR from 'swr';
//function to fetch data for SWR,this will result data from cache intiially then the endpoint
import {fetcher} from './index';

export const useGetUser = ()=>{
     const {data,error,...rest}= useSWR('/api/v1/me',fetcher);
     return {data,error, loading:!data&&!error,...rest}
    }