import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Switch from "react-switch";
import { connect } from 'react-redux'
import { createRole } from '../../actions/createRole';
import { Table } from 'reactstrap';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: true,
    }
    if (this.props.userData) {
      this.state = {
        roleName: '',
        modalType: this.props.modalType,
        permissionPages: false,
        permissionUser: false,
      };
    }

  }
  handleChange = (e, element) => {
    if (element === "roleName") {
      this.setState({
        roleName: e.target.value,
      })
    }
  }
  changeRoles = (permission) => {
    if (permission === "Pages.Users") {
      this.setState({
        permissionUser: !this.state.permissionUser,
      })
    }
    else {
      this.setState({
        permissionPages: !this.state.permissionPages,
      })
    }

  }
  onSubmit = () => {
    console.log('this props modal type on role Modal component', this.props);
    const rolesProps = this.props;
    const stateData = this.state;

    const objectToSend = {
      rolesProps,
      stateData
    }
    this.props.createRole(objectToSend);
    this.props.showModal();
    this.props.manageUpdate();
  }
  render() {
    console.log(this.props);
    return (
      <Modal isOpen={true}>
        <ModalHeader>
          <div className="header text-right display-contents">
            <div className="subject">
              {this.props.title}
            </div>
            <Button
              className="button-no-styles"
              onClick={this.props.showModal}>X</Button>
          </div>
        </ModalHeader>
        <div className="add-todo">
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            Role Name
            <input type="text" className="form-control" placeholder={this.props.roleName}
              onChange={(e) => this.handleChange(e, 'roleName')}
              value={this.state.roleName}
            />
          </ModalBody>
          <ModalBody className="inline-items">
            Permissions
            <Table >
              <tbody>
                {
                  this.props.allPermissions.map((permission) => {
                    return (<tr>
                      <td><label>
                        <span>{permission.name}</span>
                      </label></td>
                      <td><Switch
                        onChange={() => this.changeRoles(permission.name)}
                        height={20}
                        width={38}
                        checked={permission.name === "Pages.Users" ? this.state.permissionUser : this.state.permissionPages}
                        offHandleColor="#fff"
                      /></td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter className="footer d-flex flex-row">
            <Button className="button-link" onClick={() =>
              this.onSubmit()}>{this.props.action}</Button>
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createRole: (data) => dispatch(createRole(data)),
});
const mapStateToProps = ({ roles, permissions }) => {
  return { roles, permissions }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
