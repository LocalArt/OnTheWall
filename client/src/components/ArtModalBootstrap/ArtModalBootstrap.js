import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ArtModalBootstrap.css";

const ArtModalBootstrap = props => {
  console.log(props);
  return (
    <Modal
      bsSize="large"
      dialogClassName="custom-modal"
      show={props.show}
      animation={false}
      onHide={props.handleToggle}
      aria-labelledby="contained-modal-title-lg"
    >
      <Modal.Dialog className="modalStyle">
        <Modal.Header>
          <img
            className="art-fullsize"
            src="https://s-i.huffpost.com/gen/2299606/images/n-STARRY-NIGHT-628x314.jpg"
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
