//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Blogs Dashboard page that shows all blogs, admin IAM required


import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withAuth} from '@/HOC/withAuth';

const Dashboard = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="DASHBOARD">
        <h1>Hello World</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Dashboard)('admin');