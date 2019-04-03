import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


class ActivityModal extends React.Component {
    constructor() {
        super();
        this.state = {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            message: '',
            modal: true
        };
    }
    render() {
        return (

            <Modal isOpen={this.state.modal}>
                <ModalHeader>
                    <div className="header" style={{ minWidth: 300 }}>
                        <div className="subject">
                            {this.props.title}
                        </div>
                    </div>
                    <div className="">
                        <Button className="button-no-styles" onClick={this.props.handleToggle}>X</Button>
                    </div>
                </ModalHeader>
                <div className="add-todo activity-modal" style={{ minWidth: 300 }}>
                    {this.props.activity}
                </div>
            </Modal>
        );
    }
}

export default ActivityModal;
