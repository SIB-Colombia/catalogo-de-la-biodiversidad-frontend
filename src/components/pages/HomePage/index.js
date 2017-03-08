import React, { PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import { Row, Col, ProgressBar } from 'react-materialize';
import { PageTemplate, Header, Hero, Footer, FileList, CategoryList, GroupList, CommunityList } from 'components'


class HomePage extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			files: [] ,
			categories: [],
			groups: [],
			communities:[]
		}
	}

	componentDidMount() {
		$('.carousel.carousel-slider').carousel({fullWidth: true});
		document.title = 'Inicio';
	}

	componentWillMount() {  


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

			fetch('https://jsonplaceholder.typicode.com/posts/1/comments',options)  
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				this.setState({ categories: data })
			})	

			fetch('https://jsonplaceholder.typicode.com/posts/1/comments',options)  
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				this.setState({ groups: data })
			})

			fetch('https://jsonplaceholder.typicode.com/posts/1/comments',options)  
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				this.setState({ communities: data })
			})
		}
		render() {
			return (
				<PageTemplate header={<Header />} footer={<Footer />}>
				<Hero />
				{ this.state.files.length > 0 ?  <FileList data={this.state.files} /> : <div>Cargando Fichas....  <ProgressBar /></div> }
				{ this.state.categories.length > 0 ?  <CategoryList data={this.state.categories} /> : <div>Cargando Categorías....  <ProgressBar /></div> }
				{ this.state.groups.length > 0 ?  <GroupList data={this.state.groups} /> : <div>Cargando Grupos....  <ProgressBar /></div> }
				{ this.state.communities.length > 0 ?  <CommunityList data={this.state.communities} /> : <div>Cargando Comunidad.... <ProgressBar /></div> }
				</PageTemplate>
				)
		}
	}

	export default HomePage;

