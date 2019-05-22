import React from 'react';
import { Row, Col} from 'reactstrap';

class Language extends React.Component {
  render() {
    return (
      <>
         <Row>
          <Col>Oпределить язык</Col>
          <Col>Английский</Col>
          <Col>
			<img src="https://img.icons8.com/metro/26/000000/sorting-arrows-horizontal.png" alt="icon4"/>
		</Col>
          <Col>Армянский</Col>
        </Row>
		
</>
    );
  }
}
export { Language };