import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.userData) {
      this.state = {
        input1: this.props.userData.authUser.data.result.userName,
        input2: this.props.userData.authUser.data.result.emailAddress,
        input3: this.props.userData.authUser.data.result.fullName,
      };
    }

  }
  handleChange = (e, element) => {
    if (element === "input1") {
      this.setState({
        input1: e.target.value,
      })
    }
    else {
      this.setState({
        input2: e.target.value,
      })
    }
  }
  render() {
    return (

      <Modal isOpen={true}>
        <ModalHeader>
          <div className="header" style={{ minWidth: 300 }}>
            <div className="subject">
              {this.props.title}
            </div>
          </div>
          <div className="">
            <Button
              className="button-no-styles"
              onClick={this.props.showPasswordModal}>X</Button>
          </div>
        </ModalHeader>
        <div className="add-todo" style={{ minWidth: 300 }}>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            Full Name
            <input type="text" className="form-control" placeholder={this.props.value1}
              onChange={(e) => this.handleChange(e, 'input1')}
              value={this.state.input3}
            />
          </ModalBody>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            User Name
            <input type="text" className="form-control" placeholder={this.props.value1}
              onChange={(e) => this.handleChange(e, 'input1')}
              value={this.state.input1}
            />
          </ModalBody>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            Email
            <input type="text" className="form-control" placeholder={this.props.value2}
              onChange={(e) => this.handleChange(e, 'input2')}
              value={this.state.input2}
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

export default ModalComponent;
