import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ArtModalBootstrap.css";

const ArtModalBootstrap = props => {
  console.log(props);
  return (
    <Modal show={props.show} animation={false} onHide={props.handleToggle}>
      <Modal.Dialog bsClass="full-modal" className="modal-style">
        <Modal.Header>
          {props.image[0] && props.image[0].imageTitle
            ? props.image[0].imageTitle
            : "Untitled"}
        </Modal.Header>
        <Modal.Body bsClass="picture-modal">
          <img
            className="art-fullsize"
            src={
              props.image[0] && props.image[0].url
                ? props.image[0].url
                : "http://raleighdesignlab.com/onthewall/no_image.jpg"
            }
            alt="full size image"
          />
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          {props.image[0] && props.image[0].price
            ? "$" + props.image[0].price
            : "N/A"}
          <Button className="footer-btn" onClick={props.handleToggle}>
            Close
          </Button>
          {/* <Button className="footer-btn">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ArtModalBootstrap;
