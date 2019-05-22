import React from 'react';
import { Row, Col,  } from 'reactstrap';


class TextArea extends React.Component {
	render() {
		return (
		<Row>
			<Col sm="6" style={{paddingLeft: "0", paddingRight: "0"}}>
				<div style={{border:"1px solid black", height: "140px"}}>
					<div style={{marginTop: "100px", marginLeft: "20px"}}>
						<Row>
							<Col xs="9">
								<img src="http://chittagongit.com/images/ios-microphone-icon/ios-microphone-icon-22.jpg" width="30px" alt="icon5"/>
							</Col>
							<Col xs="3">
								<span>1/5000  </span>
								<img src="https://img.icons8.com/ios-glyphs/30/000000/edit.png" width="20px" alt="icon6"/>
							</Col>
						</Row>
					</div>
				</div>
			</Col>
			<Col sm="6" style={{paddingLeft: "0", paddingRight: "0"}}>
				<div style={{border:"1px solid black", height: "140px"}}>
					Перевод
				</div>
				<Row>
					<Col xs="8"></Col>
					<Col xs="4"><a href="https://translate.google.am/?hl=ru&tab=TT#view=home&op=translate&sl=auto&tl=ru">Отправить отзыв</a></Col>
				</Row>
			</Col>
		</Row>
		);
	}
}
export { TextArea };