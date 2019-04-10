import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux'
import { updatePassword } from '../../actions/updatePassword';


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '',
      new: ''
    }

  }
  handleChange = (e, element) => {
    if (element === "current") {
      this.setState({
        current: e.target.value,
      })
    }
    else {
      this.setState({
        new: e.target.value,
      })
    }
  }
  onSubmit = () => {
    this.props.updatePassword(this.state);
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
            <input type="text" className="form-control" placeholder={this.props.current}
              onChange={(e) => this.handleChange(e, 'current')}
              value={this.state.current}
            />
          </ModalBody>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            <input type="text" className="form-control" placeholder={this.props.new}
              onChange={(e) => this.handleChange(e, 'new')}
              value={this.state.new}
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
  updatePassword: (data) => dispatch(updatePassword(data)),
});
const mapStateToProps = ({ roles, permissions }) => {
  return { roles, permissions }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
