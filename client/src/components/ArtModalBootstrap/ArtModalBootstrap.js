import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ArtModalBootstrap.css";

const ArtModalBootstrap = props => {
  console.log(props);
  return (
    <Modal
      show={props.show}
      animation={false}
      onHide={props.handleToggle}
      bsSize="large"
      aria-labelledby="contained-modal-title-lg"
    >
      <Modal.Dialog>
        <Modal.Header>
          <img
            className="art-fullsize"
            src="https://dg19s6hp6ufoh.cloudfront.net/pictures/613209425/large/PicassoBullsHead.jpeg?1491535886"
            alt="full size image"
          />
        </Modal.Header>

        <Modal.Body>This is nice</Modal.Body>

        <Modal.Footer>
          <Button onClick={props.handleToggle}>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ArtModalBootstrap;
