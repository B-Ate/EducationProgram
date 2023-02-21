import React from 'react';
import { useState } from 'react';
import { Button, Form, Row, Col, ListGroup, Card } from 'react-bootstrap';
import axios from 'axios'
import AddEducationModal from "./AddEducationModal";  

function CustomForm() {

    const [data, setData] = useState({name: "", startDate : "", endDate : "", status: false});

    const handleChange = e => setData({...data, [e.target.name]: e.target.value});
    const handleChangeCheckBox = e => setData({...data, [e.target.name]: e.target.checked});

    const [educations, setEducations] = useState([]);

    const onEducations = (data) => {
       setEducations([...educations, data]);
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post('https://localhost:44317/education/AddProgram', {
          name : data.name,
          startDate : data.startDate,
          endDate : data.endDate,
          status : data.status,
          educations: educations
        }).then((response) => {
          setLoading(false);
          if(response.status != 200){
            throw new Error("Error while saving the program.");
          }
            setData({name: "", startDate : "", endDate : "", status: false});
            setEducations([]);
        })
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Program Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Program Name" value={data.name} onChange={e => handleChange(e)}/>
      </Form.Group>
      <Row>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="datetime-local" name="startDate" value={data.startDate} onChange={e => handleChange(e)}/>
            </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="datetime-local" name="endDate" value={data.endDate} onChange={e => handleChange(e)}/>
            </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Published" name="status" value={data.status} onChange={e => handleChangeCheckBox(e)}/>
      </Form.Group>
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between align-items-start">Educations
           <AddEducationModal parentCallback={onEducations}/>
        </Card.Header>
        {
          (educations == null) ? <></> : 
            <ListGroup>
            {
              educations.map(item => <ListGroup.Item className="d-flex justify-content-between align-items-start">{item.name}</ListGroup.Item> ) 
            }
           </ListGroup>
        }
      </Card>
      <Button type="submit" disabled={loading}>Save</Button>
    </Form>
  );
}

export default CustomForm;