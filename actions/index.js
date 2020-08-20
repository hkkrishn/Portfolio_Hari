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
//function to gather data from API endpoint all functions need to have hook prefix
export const useGetPosts = () => {
  //rest indicates all other information
  const {data, error, ...rest} = useSWR('/api/v1/posts', fetcher);
  //if we have no data and there is no error then we are loading
  return {data, error, loading: !data && !error, ...rest}
}

//function to gather posts dynamically by ID
export const useGetPostsById = (id) => {
  //rest indicates all other information
  const {data, error, ...rest} = useSWR(id ? (`/api/v1/posts/${id}`):(null), fetcher);
  //if we have no data and there is no error then we are loading
  return {data, error, loading: !data && !error, ...rest}
}