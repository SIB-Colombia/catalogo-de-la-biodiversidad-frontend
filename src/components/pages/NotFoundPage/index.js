import React from 'react';

import {PageTemplate, Header, Footer} from 'components';

const NotFoundPage = () => {
  return (
    <PageTemplate header={< Header />} footer={< Footer />}>
      404 no found
    </PageTemplate>
  )
}

export default NotFoundPage;
