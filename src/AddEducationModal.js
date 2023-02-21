import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import VideoEmbed from "./VideoEmbed";

function AddEducationModal({ parentCallback }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const save = e => {
     let data = {name: name, description : description, link : link};
     parentCallback(data);
     setName('');
     setDescription('');
     setLink('');
     setShow(false);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Education
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Education Name</Form.Label>
              <Form.Control type="text" placeholder="Education Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)}/>
            </Form.Group>
            <VideoEmbed embedId={link.substring(link.indexOf('v=') + 2)} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEducationModal;