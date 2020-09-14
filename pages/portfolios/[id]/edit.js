//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the edit form for each created project,we will fetch data client side
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withAuth} from '@/HOC/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios'

//functional component

const PortfolioEdit = ({user}) => {
    const router = useRouter();
    //fetch portfolio data client side
    const { data } = useGetPortfolio(router.query.id);
    return (
      <BaseLayout user={user} loading={false}>
        <BasePage header="Portfolio Edit">
            {JSON.stringify(data)}
        </BasePage>
      </BaseLayout>
    )
  }



  export default withAuth(PortfolioEdit)('admin');