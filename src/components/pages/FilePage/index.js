import React from 'react'

import { PageTemplate, Header, Footer, FileContent } from 'components'

const FilePage = () => {
	return (
		<PageTemplate header={<Header />} footer={<Footer />}>
		<FileContent />
		</PageTemplate>
		)
}

export default FilePage
