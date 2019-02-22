import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Moment from 'moment';


class AddNew extends React.Component {
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

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (

            <Modal onClose={this.props.onclose} isOpen={this.state.modal}>
                <ModalHeader>
                    <div className="header" style={{minWidth: 300}}>
                        <div className="subject">
                            Password Reset
                        </div>
                    </div>
                    <div className="">
                        <Button className="button-link" onClick={this.toggle}>X</Button>
                        </div>
                </ModalHeader>
                <div className="add-todo" style={{minWidth: 300}}>
                    <ModalBody className="body d-flex flex-column" style={{width: '100%'}}>
                        <input type="text" className="form-control" placeholder="Email"
                               defaultValue={this.props.value}
                        />
                    </ModalBody>

                    <ModalFooter className="footer d-flex flex-row">
                        <Button className="button-link" onClick={() => {
                        }}>{this.props.action}</Button>
                    </ModalFooter>
                </div>
            </Modal>
        );
    }
}

export default AddNew;
