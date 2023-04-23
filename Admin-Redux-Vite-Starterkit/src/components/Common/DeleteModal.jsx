import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Modal, ModalBody, Row } from "reactstrap";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {/* <Modal isOpen={this.props.show} toggle={this.props.onCloseClick} centered={true}>
          <ModalBody className="py-3 px-5">
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <i
                    className="mdi mdi-alert-circle-outline"
                    style={{ fontSize: "9em", color: "orange" }}
                  />
                  <h2>Are you sure?</h2>
                  <h4>You won&t be able to revert this!</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="btn btn-success btn-lg me-2"
                    onClick={this.props.onDeleteClick}
                  >
                    Yes, delete it!
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg me-2"
                    onClick={this.props.onCloseClick}
                  >
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal> */}

        <Modal size="sm" isOpen={this.props.show} toggle={this.props.onCloseClick} centered={true}>
          <div className="modal-content">
            <ModalBody className="px-4 py-5 text-center">
              <button type="button" onClick={this.props.onDeleteClick} className="btn-close position-absolute end-0 top-0 m-3"></button>
              <div className="avatar-sm mb-4 mx-auto">
                <div className="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
                  <i className="mdi mdi-trash-can-outline"></i>
                </div>
              </div>
              <p className="text-muted font-size-16 mb-4">Are you sure you want to permanently erase the job.</p>

              <div className="hstack gap-2 justify-content-center mb-0">
                <button type="button" className="btn btn-danger" onClick={this.props.onDeleteClick}>Delete Now</button>
                <button type="button" className="btn btn-secondary" onClick={this.props.onCloseClick}>Close</button>
              </div>
            </ModalBody>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

DeleteModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.any,
};

export default DeleteModal;
