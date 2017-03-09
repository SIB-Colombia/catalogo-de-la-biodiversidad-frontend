import React from 'react'
import styled from 'styled-components'
import { PageTemplate, Header, Footer, FileView, FileSummary, FileDetail, FileList } from 'components'
import { Tabs, Tab, Row, Col, ProgressBar } from 'react-materialize';

const Wrapper = styled.div`
background:#ffffff !important;
z-index:1 !important;
.tabs{
	background:#00838f;
}
.tabs .tab a{
	color :white;
}
.main-title{
	margin: 10px 0px 30px 0px;
}
.background-section{

}


`


class FilePage extends React.Component {


	constructor(props){
		super(props);
		this.state = { 
			summary: {},
			detail: {},
			files:[],
			viewDetail: false
		}
	}

	componentDidMount() {	

		$('.materialboxed').materialbox();
		$('.parallax').parallax();
		$('.scrollspy').scrollSpy();
		window.scrollTo(0, 0);

		/*var _this = this;
		$('.tab-demo .tab').on('click',function(e){   
			switch($(this).find('a').text()){
				case 'Detalles':
				_this.setState({viewDetail: true});
				break;
			}
		})*/	
		
	}


	componentWillMount() { 
		//Asi llegan parámetros por url
		console.log('procesar->',this.props.params.fileId);


		var options = {
			method: 'GET',
			// mode: 'cors', 
			// headers: new Headers({
				// 'Authorization': 'bearer example'
				// })
			};

			fetch('https://jsonplaceholder.typicode.com/posts/1/comments',options)  
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				this.setState({ files: data })
			})

			this.setState({ summary: {

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
			},

			detail: {

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
				authors: [
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
				},
				{
					name: 'Instituo Humboldt',
					url: 'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
				}
				],
				taxo:[
				{
					name: 'Reino ',
					value: 'Animalia',
				},
				{
					name: 'Reino ',
					value: 'Animalia',
				},
				{
					name: 'Reino ',
					value: 'Animalia',
				},
				{
					name: 'Reino ',
					value: 'Animalia',
				}
				],
				basic:[
				{
					name: 'Fecha de Elaboración ',
					value: '2014-04-01',
				},
				{
					name: 'Fecha de Elaboración ',
					value: '2014-04-01',
				},
				{
					name: 'Fecha de Elaboración ',
					value: '2014-04-01',
				},
				{
					name: 'Fecha de Elaboración ',
					value: '2014-04-01',
				}
				]

			}
		})


		}




		render() {
			return (
				<PageTemplate header={<Header />} footer={<Footer />}>
				<br/>
				<Wrapper className="container">
				<div className="card-panel">
				<h3 className="cyan-text text-darken-4 main-title">Coragyps atratus</h3>
				<Tabs className='tab-demo z-depth-1'>
				<Tab title="Resumen" active  >
				{ this.state.summary ?  <FileSummary data={this.state.summary} /> : <div classname="center-align">Cargando resumen....  <ProgressBar /></div> }
				
				</Tab>
				<Tab title="Detalles" >

				{this.state.detail ?  <FileDetail data={this.state.detail} /> : <div classname="center-align">Cargando detalle....  <ProgressBar /></div>}

				

				</Tab>
				<Tab title="Imágenes"></Tab>
				<Tab title="Mapas"></Tab>
				<Tab title="Comunidad"></Tab>
				<Tab title="Comentarios"></Tab>
				</Tabs>
				</div>
				</Wrapper>
				</PageTemplate>
				)
		}
	}

	export default FilePage;
	//{ this.state.files.length > 0 ? <FileList data={this.state.files} /> : <div>ergergergergerg</div> }
//{this.state.viewDetail ? (this.state.files ? <FileList data={this.state.files} /> : null) : null}