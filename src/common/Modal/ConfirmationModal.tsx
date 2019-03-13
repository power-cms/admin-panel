import React, { Component, ComponentType } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

interface IProps {
  onConfirm: () => void;
  toggle: () => void;
  isOpen: boolean;
  children: ComponentType;
}

export class ConfirmationModal extends Component<IProps> {
  public confirm = () => {
    this.props.toggle();
    this.props.onConfirm();
  };

  public render() {
    const { toggle, isOpen, children } = this.props;
    const { confirm } = this;

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirmation</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={confirm}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
