import React from 'react';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Container } from 'reactstrap';

class App extends React.Component {
	render() {
		return (
			<Container fluid>
				<Header />
				<Content />
				<Footer />
			</Container>  
		);
	};
};

export {App};