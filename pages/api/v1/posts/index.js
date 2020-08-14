//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the API route to setup serverless functions.

import {data} from '@/data'
import axios from 'axios'

//if there is only one function it can be an anonymous function no need to name it
const handlePosts =  async(req,res)=>{
    //utilize res to send res
    //API functions are not part of the javascript bundle, they are present only on the local dev server
    //when we deploy to the cloud this function needs to be included as a serverless function in the cloud.
    try{
      const axiosres = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
       const posts = axiosres.data;
      //sending the response with 10 posts
      res.status(200).json(posts.slice(0,10))
    }catch(err){
        console.log(err)
        //catch error and send back error message
        res.status(err.status || 400).json({message:"There is an error with the API"})
    }


}


//this function needs to be exported
export default handlePosts;