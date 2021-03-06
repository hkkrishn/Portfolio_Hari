//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the portfolio page within the site that will contain all links to projects and render them.

import React from 'react'
import { useState } from 'react';
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import PortfolioAPI from '@/lib/api/portfolios'
import {useGetUser} from '@/actions/user';
import {useRouter} from 'next/router'
import { Row, Col, Card, CardHeader, CardBody, CardText, CardTitle,Button } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard'
import { useDeletePortfolio } from '@/actions/portfolios';
import { isAuthorized } from '@/utils/auth0';



//functional component that holds the base layout component as well as information of page that is passed down as props.children
//SWR is added to gather data from cache before executing request for data that is validated to have changed
const Portfolios = ({portfolios: initialPortfolios}) => {
    const router = useRouter()
    const [portfolios, setPortfolios] = useState(initialPortfolios);
    const {data:dataUser,loading:loadingUser}  = useGetUser();
    const [deletePortfolio, {data, error}] = useDeletePortfolio();

    //function to delete portfolios
    const _deletePortfolio = async (e, portfolioId) => {
      e.stopPropagation();
      const isConfirm = confirm('Are you sure you want to delete this project?');
      if (isConfirm) {
        await deletePortfolio(portfolioId);
        //update state after deletion by removing project with id
        setPortfolios(portfolios.filter(p => p._id !== portfolioId));
      }
    }
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
        <BasePage
        header = "Projects"
         className = "portfolio-page">
          <Row>
          { portfolios.map((portfolio)=>
            <Col key = {portfolio._id}
            onClick ={(e)=>{
              e.preventDefault()
              router.push('/portfolios/[id]',`/portfolios/${portfolio._id}`)
            }}
             md="4">
            <PortfolioCard
                portfolio={portfolio}>
                { dataUser && isAuthorized(dataUser, 'admin') &&
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                      }}
                      className="mr-2"
                      color="warning">Edit</Button>
                     <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color="danger">Delete</Button>
                  </>
                }
              </PortfolioCard>
            </Col>)

          }
          </Row>
        </BasePage>
      </BaseLayout>
    )
}

//function to gather static data for performance, function is called only during the build time
//create static page with dynamic data
export const getStaticProps =  async ()=>{
  const json = await  new PortfolioAPI().getAll();
  //resolve into json
  const portfolios = json.data;
  return{
    props:{portfolios}
  }

}


export default Portfolios;