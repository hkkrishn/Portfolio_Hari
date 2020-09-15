//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Blog editor, admin IAM required
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withAuth} from '@/HOC/withAuth';

const BlogEditor = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Blog Editor">
        <h1>BLOG</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin');