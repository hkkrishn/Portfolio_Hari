//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Auth0 integration config

import { initAuth0 } from '@auth0/nextjs-auth0';

//values gathered from Auth0.com
//values passed as enviornment variables
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
export default initAuth0({
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