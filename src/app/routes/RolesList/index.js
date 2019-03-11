import React from 'react';
import { connect } from 'react-redux'
import Table from '../../../components/Tables/TableRoles';
import { getAllRoles } from '../../../actions/getAllRoles';

class RolesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    this.props.getAllRoles();
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      data: nextProps.roles,
    });
  }

  render() {
    console.log('data state', this.state.data)
    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          {
            this.state.data.length ? <Table data={this.props.roles} selectedWidth="width-100" /> : <h1>Loading</h1>
          }
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
