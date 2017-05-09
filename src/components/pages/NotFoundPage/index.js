import React from 'react';

import {PageTemplate, Header, Footer, NotFound} from 'components';

const NotFoundPage = () => {
  return (
    <PageTemplate header={< Header />} footer={< Footer />}>
      <NotFound/>
    </PageTemplate>
  )
}

export default NotFoundPage;
