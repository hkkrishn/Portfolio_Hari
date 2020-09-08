//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import PortfolioAPI from '@/lib/api/portfolios'
import {useGetUser} from '@/actions/user';

//functional class based component

const Portfolio=({portfolio})=>{
    console.log(portfolio)
    //on initial render when page is statically optimized and served query is undefined

    //We have two options either we can fetch the data client side, this way we can get statically optimized page
    //or we can server side render the data
    const {data:dataUser,loading:loadingUser}  = useGetUser();

        return(
            <BaseLayout
            user = {dataUser}
      loading = {loadingUser}>
                <BasePage header = "Project Detail">
            {JSON.stringify(portfolio)}


                </BasePage>

            </BaseLayout>
        )
}



//fetch all the portfolios and then provide all the dynamic parts
//function executed at build time
export const getStaticPaths  = async()=>{
    const json = await new PortfolioAPI().getAll();
  const portfolios = json.data;

  // Get the paths we want pre-render based on portfolio ID
  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })

  // fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false };

  }

  export async function getStaticProps({params}) {
    const json = await new PortfolioAPI().getById(params.id);
    const portfolio = json.data;
    return { props: {portfolio}};
  }

export default Portfolio;