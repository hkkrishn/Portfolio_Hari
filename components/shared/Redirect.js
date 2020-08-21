//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Generic function that allows for redirect

//functional component that receives the redirect endpoint and redirects to that page
import {useEffect} from 'react'
import {useRouter} from 'next/router'

//to prop is the endpoint
const Redirect = ({to,ssr})=>{
    const router = useRouter();

    //useEffect will be executed only once and will execute when the component is loaded
    useEffect(()=>{

        //check to see if we are requesting the server
        if(ssr){
            window.location.pathname = to;
        } else{
            router.push(to)
        }



    },[])
    return null;
}

export default Redirect;