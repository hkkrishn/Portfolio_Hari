//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Modular functions for separation of concerns

import {useState,useEffect} from 'react'

//dynamic function to make all API calls
 export const useGetPosts = ()=>{
    const [posts,setPosts] = useState([])
    const [error,setError] = useState()

    //state for gathering loading state
    const [loading,setLoading] = useState(true);

    //UseEffect  Function, empty array indicates that this function will only be called once.
    useEffect(()=>{
      //async function to get data
      const getPosts = async ()=>{
        //fetch function to make request axios can be called as well
         const res =   await fetch('/api/v1/posts')
         const result = await res.json();

         //error handling
         if(res.status !== 200){
             setError(result)
         }else{
             //no error is present
             console.log(result);
             //async setState function
             setPosts(result);
          }
          setLoading(false);
         }

      getPosts();
    },[])
    return{posts,error,loading}

  }