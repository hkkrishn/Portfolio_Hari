//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Serverless function to receive userinfo from  Auth0 authentication and create session



import auth0 from '@/utils/auth0';
//async function to issue get request to auth0.com/ endpoint
const me = async (req,res)=>{
    try{
        //handleProfile is a method from the auth0 package to receive user info
        await auth0.handleProfile(req,res,{redirecTo:'/'});

    }catch(eror){
        console.log(error)
        res.status(error.status||400).end(error.message)
    }

}
export default me;