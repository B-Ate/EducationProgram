import axios from 'axios'
import { useState } from 'react';
import { Accordion, Card, ListGroup, Button } from 'react-bootstrap';
import VideoEmbed from "./VideoEmbed";

function CustomList() {

  const [data, setData] = useState([]);

  const refresh = () => {
    axios.get('https://localhost:44317/education/GetPrograms').then((response) => {
      if(response.status != 200){
        throw new Error("Error while getting programs.");
      }
  
      setData(response.data.data);
    });
 };

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-start">Existing Programs<Button onClick={refresh}>Refresh</Button></Card.Header>
      {
          (data == null) ? <></> : 
              <Accordion defaultActiveKey="0">
              {
                   data.map((item, index) => <Accordion.Item eventKey={index}>
                   <Accordion.Header> {item.name}</Accordion.Header>
                   <Accordion.Body>
                   <Card>
                      <Card.Body>
                        Start Date : {item.startDate}
                        <hr/>
                        End Date : {item.endDate}
                        <hr/>
                        Status : {item.status ? "Published" : "Not Published"}
                      </Card.Body> 
                   </Card>
                    <br/>
                      <Card>
                      <Card.Header>Educations</Card.Header>
                      {
                        (item.educations == null) ? <></> :
                         <ListGroup>
                           { item.educations.map(education => 
                           <ListGroup.Item><Card.Title>{education.name}</Card.Title><Card.Subtitle>{education.description}</Card.Subtitle><hr/><VideoEmbed embedId={education.link.substring(education.link.indexOf('v=') + 2)} /></ListGroup.Item>     
                           ) }
                         </ListGroup>
                      }
                    </Card>
                   </Accordion.Body>
                 </Accordion.Item>) 
              }
              </Accordion>
      }
    </Card>
  );
}

export default CustomList;