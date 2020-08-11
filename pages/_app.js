
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the app.js file page within the site  from here all pages are rendered and passed as props and styles are imported
//all styles need to be defined within the app.js file.


import '../styles/globals.css'
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'


//Renders each page with its content


class MyApp extends Component{

  //function to gather information from server for all our pages,
  // ctx parameter refers to the context object

  static async getInitialProps({Component,ctx}){
    let pageProps = {};

    if(Component.getInitialProps){
      //calls the components getInitialProps if it has one
      pageProps = await Component.getInitialProps(ctx)
    }

    return{pageProps};
}

  render(){
    const {Component,pageProps} = this.props;
    return(
      <Component {...pageProps} />
    )
  }
}

export default MyApp
