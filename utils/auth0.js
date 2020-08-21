//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Auth0 integration config

import { initAuth0 } from '@auth0/nextjs-auth0';

//values gathered from Auth0.com
//values passed as enviornment variables
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
const auth0 =  initAuth0({
  domain: process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_CLIENTID,
  clientSecret: process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_CLIENTSECRET,
  scope: 'openid profile',
  redirectUri: process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_REDIRECTURI,
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_POSTLOGOUTREDIRECTURI,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.NEXT_PUBLIC_DEVELOPMENT_AUTH0_COOKIESECRET,
  }
});

export default auth0;


//modular function for server side authentication and redirect
 export const authorizeUser =  async (req,res)=>{
  //retrieve userSession on server from auth0
  const session = await auth0.getSession(req);

  //check to see if the user is authenticated
  if(!session || !session.user){
  //server side redirect to the login page
    res.writeHead(302,{
      Location:'/api/v1/login'
    });
    res.end();
    return(null)

  }
  console.log(session.user)
  return session.user;

}

// root function to return server side props to our page
export const withAuth = (getData)=>{
  return  async ({req,res})=>{
    //retrieve userSession on server from auth0
  const session = await auth0.getSession(req);

  //check to see if the user is authenticated
  if(!session || !session.user){
  //server side redirect to the login page
    res.writeHead(302,{
      Location:'/api/v1/login'
    });
    res.end();
    return({props:{}})

  }
  console.log(session.user)

  const data = getData ?  await getData():{};
 return {
   props:{user:session.user,...data}
 }


  }
}