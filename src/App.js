import { Row, Container, Col, Card } from 'react-bootstrap';
import CustomForm from './CustomForm';
import CustomList from './CustomList';

function App() {
  return (
    <Container>
      <img src={require('./header.jpg')} className='img-fluid w-100'/>
      <Row className='pt-4'>
          <Col>
            <Card>
              <Card.Header>Add New Program</Card.Header>
              <Card.Body>
                <CustomForm/>
              </Card.Body>
            </Card>
          </Col>
          <Col>
              <CustomList/>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
