import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ArtistProfileModal.css";

const ArtistProfileModal = props => {
  console.log(props);
  return (
    <Modal show={props.show} animation={false} onHide={props.handleToggle}>
      <Modal.Dialog bsClass="full-modal" className="modal-style">
        <Modal.Header>
          {props.image && props.image.imageTitle
            ? props.image.imageTitle
            : "Untitled"}
        </Modal.Header>
        <Modal.Body bsClass="picture-modal">
          <img
            className="art-fullsize"
            src={
              props.image && props.image.url
                ? props.image.url
                : "http://raleighdesignlab.com/onthewall/no_image.jpg"
            }
            alt="full size image"
          />
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          {props.image && props.image.price ? "$" + props.image.price : "N/A"}
          <Button className="footer-btn" onClick={props.handleToggle}>
            Close
          </Button>
          {/* <Button className="footer-btn">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ArtistProfileModal;
