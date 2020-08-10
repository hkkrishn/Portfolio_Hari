//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'
import {withRouter} from 'next/router'
import axios from 'axios'

//react class based component

class Portfolio extends Component{
    static async getInitialProps({query}){
        let post = []
        try{
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
          post = res.data;
        }catch(err){
            console.log(err)
        }
        return{portfolio:post};
    }
    render(){
        const {portfolio} = this.props;
        return(
            <BaseLayout>
            <h1>I am a project</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY:{portfolio.body}</p>
            <p>ID:{portfolio.id}</p>
            </BaseLayout>
        )

    }

}

export default withRouter(Portfolio);