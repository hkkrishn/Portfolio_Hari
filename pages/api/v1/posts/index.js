//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the API route to setup serverless functions.

import {data} from '@/data'
const handlePosts = (req,res)=>{
    //utilize res to send res
    //API functions are not part of the javascript bundle, they are present only on the local dev server
    //when we deploy to the cloud this function needs to be included as a serverless function in the cloud.
    res.status(200).json(data);

}


//this function needs to be exported
export default handlePosts;