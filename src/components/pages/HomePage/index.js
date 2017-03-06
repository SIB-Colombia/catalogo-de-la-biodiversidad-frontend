import React from 'react'

import { PageTemplate, Header, Hero, Footer, FileList, CategoryList, GroupList, CommunityList } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Hero />
      <FileList />
      <CategoryList />
      <GroupList />
      <CommunityList />
    </PageTemplate>
  )
}

export default HomePage
