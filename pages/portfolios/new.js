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
import Redirect from '@/components/shared/Redirect';

import { useCreatePortfolio } from '@/actions/portfolios';

//functional component that holds the base layout component as well as information of page that is passed down as props.children

const  PortfolioNew = ({user,loading2})=>{

  //import custom hook useCreatePortfolio
  //when this hook is called it will return the function create portfolio as indicated on line 24
  //and an object that includes the data,loading and error as retrieved by useGetUser hook

  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();
    //this function is passed by props and executed on form submit by PortfolioForm
    if (data) { return <Redirect to="/portfolios" /> }
    return(
      <BaseLayout
      user = {user}
      loading = {loading2}>
        <BasePage header = "Add New Project">
        <Row>
          <Col md="8">
          <PortfolioForm onSubmit={createPortfolio} />
            { error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>

        </BasePage>
      </BaseLayout>
    )
}

export default withAuth(PortfolioNew)('admin');