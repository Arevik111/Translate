import React from 'react';

import { HeaderNew } from './components/Header/HeaderNew';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Container } from 'reactstrap';

class App extends React.Component {
	render() {
		return (
			<Container fluid>
			    <HeaderNew />
				
				<Content />
				<Footer />
			</Container>  
		);
	};
};

export {App};