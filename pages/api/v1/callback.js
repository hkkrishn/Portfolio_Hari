//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Serverless function to integrate with Auth0 and handle authentication
//related to /api/v1/callback endpoint


import auth0 from '@/utils/auth0';

//async function to issue get request to auth0.com/ endpoint
const callback = async (req,res)=>{
    try{
        //handleCallback is a method from the auth0 package
        await auth0.handleCallback(req,res,{redirecTo:'/'});

    }catch(eror){
        console.log(error)
        res.status(error.status||400).end(error.message)
    }

}

export default callback;