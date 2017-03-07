import React from 'react'

import { PageTemplate, Header, Footer, FileDetail } from 'components'

class FilePage extends React.Component {

	componentDidMount() {

		//Asi llegan parámetros por url
		// console.log('->',this.props.params.fileId);


	}


	getFile = (id) => {

		console.log('->traer ficha-> ',id);

		return {

			summary: {

				images: [
				{
					url: 'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
					author: 'Hola Mundo'
				},
				{
					url: 'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
					author: 'Hola Mundo'
				},
				{
					url: 'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
					author: 'Hola Mundo'
				},
				{
					url: 'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
					author: 'Hola Mundo'
				}
				],
				names: [
				{
					title: 'CHULO',
					description: 'Español Colombia- Región Andina',
				},
				{
					title: 'CHULO',
					description: 'Español Colombia- Región Andina',
				},
				{
					title: 'CHULO',
					description: 'Español Colombia- Región Andina',
				},
				{
					title: 'CHULO',
					description: 'Español Colombia- Región Andina',
				}

				],
				distribution: {},
				editors: [
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
				},
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
				}
				],
				activity: [
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					description: 'Instituo Humboldt agregó 20 fotos',
				},
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					description: 'Instituo Humboldt eliminó 20 fotos',
				},
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					description: 'Instituo Humboldt agregó 20 fotos',
				},
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					description: 'Instituo Humboldt agregó 20 fotos',
				}
				],
				groups: [
				{
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					name: 'Aves de colombia',
					description: '350.900 lorem ipsum',

				},
				{
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					name: 'Aves de colombia',
					description: '350.900 lorem ipsum',

				},
				{
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
					name: 'Aves de colombia',
					description: '350.900 lorem ipsum',

				}
				]
			}

		};


	}


	
	render() {
		return (
			<PageTemplate header={<Header />} footer={<Footer />}>
			<FileDetail data={this.getFile(this.props.params.fileId)} />
			</PageTemplate>
			)
		}
	}

	export default FilePage;