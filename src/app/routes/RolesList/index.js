import React from 'react';
import { connect } from 'react-redux'
import Table from '../../../components/Tables/TableRoles';
import { getAllRoles } from '../../../actions/getAllRoles';

class RolesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  componentDidMount = () => {
    this.props.getAllRoles();
    this.setState({
      data: this.props.roles
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>This is getting the roles from our database, will add a button to add new roles</h1>
        <div className="d-flex justify-content-center">
          <Table data={this.state.data} selectedWidth="width-100" />
        </div>

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getAllRoles: () => dispatch(getAllRoles()),
});
const mapStateToProps = ({ roles }) => {
  return { roles }
};
export default connect(mapStateToProps, mapDispatchToProps)(RolesList);
