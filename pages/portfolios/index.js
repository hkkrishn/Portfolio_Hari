//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the portfolio page within the site that will contain all links to projects and render them.

import React from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import PortfolioApi from '@/lib/api/portfolios'
import {useGetUser} from '@/actions/user';


//functional component that holds the base layout component as well as information of page that is passed down as props.children
//SWR is added to gather data from cache before executing request for data that is validated to have changed
const Portfolios=({portfolios})=>{

    const {data:dataUser,loading:loadingUser}  = useGetUser();


    //Function to render posts via li tags.
    const renderPortfolios=(portfolios)=>{
      return portfolios.map(portfolio=>{
        return(
      <li style= {{fontSize:"20px"}} key = {portfolio._id}>
        <Link as = {`/portfolios/${portfolio._id}`} href = "/portfolios/[id]">
            <a>
                {portfolio.title}
            </a>
        </Link>
      </li>
        )
    })
    }
    return(
      <BaseLayout
      user = {dataUser}
      loading = {loadingUser}>
        <BasePage>
            <ul>
            {renderPortfolios(portfolios)}
          </ul>


        </BasePage>
      </BaseLayout>
    )
}

//function to gather static data for performance, function is called only during the build time
//create static page with dynamic data
export const getStaticProps =  async ()=>{
  const json = await  new PortfolioApi().getAll();
  //resolve into json
  const portfolios = json.data;
  return{
    props:{portfolios}
  }

}


export default Portfolios;