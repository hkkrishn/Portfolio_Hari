//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the edit form for each created project,we will fetch data client side,


import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withAuth} from '@/HOC/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios'
import PortfolioForm from '@/components/PortfolioForm';
import { Row, Col } from 'reactstrap';
import { useUpdatePortfolio} from '@/actions/portfolios';
import { toast } from 'react-toastify';

//functional component

const PortfolioEdit = ({user}) => {
    const router = useRouter();
    //fetch portfolio data client side

    //useGetPortfolio retrieves data and passes the data as initialData prop to PortfolioFom, this in turn will prefill the form

    const [ updatePortfolio, {error}] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);


  const _updatePortfolio = async (data) => {
    updatePortfolio(router.query.id, data)
      .then(() => toast.success('Portfolio has been updated!', {autoClose: 2000}))
      .catch(() => toast.error('Please check if all fields are filled!', {autoClose: 2000}))
  }

    return (
      <BaseLayout user={user} loading={false}>
        <BasePage header="Edit Project Details">
            <Row>
                <Col md="8">
                { initialData &&
                    <PortfolioForm
                        onSubmit={_updatePortfolio}
                initialData={initialData}
                    />

                    }
                    { error &&
              <div className="alert alert-danger mt-2">{error}</div>
            }

                </Col>
            </Row>
        </BasePage>
      </BaseLayout>
    )
  }



  export default withAuth(PortfolioEdit)('admin');