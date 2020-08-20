//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Serverless function to integrate with Auth0 and handle authentication

const login = (req,res)=>{
    res.status(200).json({message:" Login API connection success"})
}

export default login;