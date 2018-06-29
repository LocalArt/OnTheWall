import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ArtModalBootstrap.css";

const ArtModalBootstrap = props => {
  console.log(props);
  return (
    <Modal show={props.show} animation={false} onHide={props.handleToggle}>
      <Modal.Dialog bsClass="full-modal" className="modal-style">
        {/* <Modal.Header>
          <img
            className="art-fullsize"
            src="https://s-i.huffpost.com/gen/2299606/images/n-STARRY-NIGHT-628x314.jpg"
            alt="full size image"
          />
        </Modal.Header> */}
        <Modal.Body bsClass="picture-modal">
          <img
            className="art-fullsize"
            src="https://s-i.huffpost.com/gen/2299606/images/n-STARRY-NIGHT-628x314.jpg"
            alt="full size image"
          />
        </Modal.Body>

        <Modal.Footer bsClass="modal-footer">
          <Button onClick={props.handleToggle}>Close</Button>
          <Button className="footer-btn">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ArtModalBootstrap;
