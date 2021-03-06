
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the app.js file page within the site  from here all pages are rendered and passed as props and styles are imported
//all styles need to be defined within the app.js file.


import '@/styles/globals.css'
import '@/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/main.scss';
import React,{Component} from 'react'
import {useGetUser} from '@/actions/user';


//Renders each page with its content


const MyApp=({Component,pageProps})=>{
    return(
      <Component {...pageProps} />
    )

}

export default MyApp
