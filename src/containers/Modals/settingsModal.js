import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux'
import { updateUser } from '../../actions/updateUser';


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.userData) {
      this.state = {
        userName: this.props.userData.authUser.data.result.userName || '',
        emailAddress: this.props.userData.authUser.data.result.emailAddress || '',
        fullName: this.props.userData.authUser.data.result.fullName || '',
        name: this.props.userData.authUser.data.result.name || '',
        surname: this.props.userData.authUser.data.result.surname || '',
        id: this.props.userData.authUser.data.result.id || '',
      };
    }

  }
  handleChange = (e, element) => {
    if (element === "userName") {
      this.setState({
        userName: e.target.value,
      })
    }
    if (element === "fullName") {
      this.setState({
        fullName: e.target.value,
      })
    }
    if (element === "name") {
      this.setState({
        name: e.target.value,
      })
    }
    if (element === "surname") {
      this.setState({
        surname: e.target.value,
      })
    }
    if (element === "emailAddress") {
      this.setState({
        emailAddress: e.target.value,
      })
    }
  }
  onSubmit = () => {
    this.props.updateUser(this.state);
    this.props.showPasswordModal();
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
            Name
            <input type="text" className="form-control" placeholder={this.props.value1}
              onChange={(e) => this.handleChange(e, 'name')}
              value={this.state.name}
            />
          </ModalBody>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            Surname
            <input type="text" className="form-control" placeholder={this.props.value1}
              onChange={(e) => this.handleChange(e, 'surname')}
              value={this.state.surname}
            />
          </ModalBody>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            User Name
            <input type="text" className="form-control" placeholder={this.props.value1}
              onChange={(e) => this.handleChange(e, 'userName')}
              value={this.state.userName}
            />
          </ModalBody>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            Email
            <input type="text" className="form-control" placeholder={this.props.value2}
              onChange={(e) => this.handleChange(e, 'emailAddress')}
              value={this.state.emailAddress}
            />
          </ModalBody>
          <ModalFooter className="footer d-flex flex-row">
            <Button className="button-link" onClick={this.onSubmit}>{this.props.action}</Button>
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateUser: (data) => dispatch(updateUser(data)),
});
const mapStateToProps = ({ roles, permissions }) => {
  return { roles, permissions }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
