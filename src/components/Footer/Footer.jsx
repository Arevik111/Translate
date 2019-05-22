import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Footer extends React.Component {
	render() {
		return (
			
				<div style={{ display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					paddingBottom: "30px",
					paddingTop: "30px"}}>
				<Row>
			
					<Col sm="4" >
						<Button outline 
						color="secondary"
						style={{height: "65px", width: "65px", borderRadius: "50%"}}>
							<img src="https://img.icons8.com/windows/32/000000/time-machine.png" alt="icon7" />
						</Button>{' '}
						<h6>История</h6>
					</Col>
					<Col sm="4" >
						<Button outline 
						color="secondary"
						style={{height: "65px", width: "65px", borderRadius: "50%"}}>
							<img src="https://img.icons8.com/windows/32/000000/filled-star.png" alt="icon8" />
						</Button>{' '}
						<h6>Сохранено
						</h6>
					</Col>
							<Col sm="4" >
						<Button outline 
						color="secondary"
						style={{height: "65px", width: "65px", borderRadius: "50%"}}>
							<img src="https://img.icons8.com/ios-glyphs/30/000000/group-foreground-selected.png" alt="icon9" />
						</Button>{' '}
						<h6>
Сообщества</h6>
					</Col>
					
				</Row>
				</div>
				
			
		);
	}
}
export { Footer };