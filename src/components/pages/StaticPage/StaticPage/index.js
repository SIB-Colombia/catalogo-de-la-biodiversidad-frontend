import React from 'react'

import { PageTemplate, Header, Footer, Paragraph, Heading } from 'components'

const StaticPage = ({ params: { page }}) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>{page}.</Heading>
      <Paragraph>
        Paragrafo de ejemplo
      </Paragraph>
    </PageTemplate>
  )
}

export default StaticPage
