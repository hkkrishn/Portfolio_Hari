//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the create project page,only admin users will have access to this page.

import React,{Component} from 'react';
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withAuth} from '@/HOC/withAuth'
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';

import { useCreatePortfolio } from '@/actions/portfolios';

//functional component that holds the base layout component as well as information of page that is passed down as props.children

const  PortfolioNew = ({user,loading})=>{

  //import custom hook useCreatePortfolio
  //when this hook is called it will return the function create portfolio as indicated on line 24
  //and an object that includes the data,loading and error as retrieved by useGetUser hook

  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();
    //this function is passed by props and executed on form submit by PortfolioForm
    const _createPortfolio = (data) => {
        createPortfolio(data)
      }

    return(
      <BaseLayout
      user = {user}
      loading = {loading}>
        <BasePage header = "Add New Project">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={_createPortfolio}/>
          </Col>
        </Row>

        </BasePage>
      </BaseLayout>
    )
}

export default withAuth(PortfolioNew)('admin');