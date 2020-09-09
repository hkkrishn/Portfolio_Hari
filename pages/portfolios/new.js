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

//functional component that holds the base layout component as well as information of page that is passed down as props.children

const  PortfolioNew = ({user,loading})=>{

    return(
      <BaseLayout
      user = {user}
      loading = {loading}>
        <BasePage header = "Add New Project">
        <Row>
          <Col md="8">
            <PortfolioForm />
          </Col>
        </Row>

        </BasePage>
      </BaseLayout>
    )
}

export default withAuth(PortfolioNew)('admin');