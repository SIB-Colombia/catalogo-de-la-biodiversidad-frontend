import React from 'react'

import {PageTemplate, Header, Footer, Login} from 'components'

const SamplePage = () => {
  return (
    <PageTemplate header={< Header />} footer={< Footer />}>
      <Login/>
    </PageTemplate>
  )
}

export default SamplePage
