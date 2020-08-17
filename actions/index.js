//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Modular functions for separation of concerns

import {useState,useEffect} from 'react'

//dynamic function to make all API calls
 export const useGetData = (url)=>{
    const [data,setData] = useState()
    const [error,setError] = useState()

    //state for gathering loading state
    const [loading,setLoading] = useState(true);

    //UseEffect  Function,  array on line 38 indicates that every time the url changes we run the function again .
    useEffect(()=>{
      //async function to get data
      //url is the API endpoint passed
      const getData = async ()=>{
        //fetch function to make request axios can be called as well
         const res =   await fetch(url)
         const result = await res.json();

         //error handling
         if(res.status !== 200){
             setError(result)
         }else{
             //no error is present
             console.log(result);
             //async setState function
             setData(result);
          }
          setLoading(false);
         }
         //if url is present fetch data
       url && getData();
    },[url])
    return{data,error,loading}

  }