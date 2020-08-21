//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Modular Higher Order Component that displays the passed component if Authenticated
import {useGetUser} from '@/actions/user';
import Redirect from '@/components/shared/Redirect'
import {isAuthorized} from '@/utils/auth0'

//Higher Order Component which checks to see if the user is authenticated and only displays the page if so
 export const withAuth = (Component)=>(role)=>{
    return (props)=>{
        const {data,loading} = useGetUser();
        //auth check
        if(loading){
            return(
                <p>Loading....</p>
            )
        } if(!data){
            //redirect user if not authenticated via Redirect component
            return <Redirect ssr to = "/api/v1/login" />

          }else{
              if( role && !isAuthorized(data,role)){
                return <Redirect ssr to = "/api/v1/login" />
              }
            return(
                <Component data = {data} loading = {loading} {...props}/>
              )

          }
       return <Component {...props}/>
    }
}

