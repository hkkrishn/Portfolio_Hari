//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Generic function that allows for redirect

//functional component that receives the redirect endpoint and redirects to that page
import {useEffect} from 'react'
import {useRouter} from 'next/router'

//to prop is the endpoint
const Redirect = ({to})=>{
    const router = useRouter();
    //useEffect will be executed only once and will execute when the component is loaded
    useEffect(()=>{
        router.push(to)

    },[])
    return null;
}

export default Redirect;