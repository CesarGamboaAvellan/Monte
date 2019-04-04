import React from 'react';
import { connect } from 'react-redux'
import Table from '../../../components/Tables/TableRoles';
import { getAllRoles } from '../../../actions/getAllRoles';
import { GetAllPermissions } from '../../../actions/getAllPermissions';
import CircularLoader from '../../../components/CircularProgress/index';

class RolesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentWillMount() {
    this.props.getAllRoles();
    this.props.GetAllPermissions();
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      data: nextProps.roles,
    });
  }

  render() {

    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          {
            this.state.data.length ? <Table
              data={this.props.roles}
              selectedWidth="width-100"
              permissions={this.props.permissions}
            /> : <CircularLoader />
          }
        </div>

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getAllRoles: () => dispatch(getAllRoles()),
  GetAllPermissions: () => dispatch(GetAllPermissions())
});
const mapStateToProps = ({ roles, permissions }) => {
  return { roles, permissions }
};
export default connect(mapStateToProps, mapDispatchToProps)(RolesList);
