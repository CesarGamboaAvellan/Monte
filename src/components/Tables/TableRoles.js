import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import { Table, Button } from 'reactstrap';
import RolesModal from '../../containers/Modals/rolesModal';

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: '',
      action: '',
      roleId: 0,
    }
  }
  openModal = (type, actionType, roleNumber) => {
    this.setState({
      showModal: !this.state.showModal,
      modalType: type,
      action: actionType,
      roleId: roleNumber,
    })
  }
  render() {
    return (
      <CardBox cardStyle="p-0"
        heading={<IntlMessages id="table.Roles" />}
        headerOutside>
        <Button
          className="button-secondary buttons-with-icons"
          onClick={() => this.openModal('new', 'create')}
        >
          <i className="flaticon-plus" />
          <span className="actions-span margin-buttons">
            Create new Role
                          </span>
        </Button>
        <div>
          <Table hover size="md">
            <thead>
              <tr className="gray-color">
                <th>Actions</th>
                <th>Roles</th>
                <th>Permissions</th>
              </tr>
            </thead>
            <tbody>

              {

                this.props.data && this.props.data.map((row) => {
                  return (
                    <tr>
                      {
                        this.state.showModal && <RolesModal
                          action={this.state.action}
                          showModal={this.openModal}
                          manageUpdate={this.props.manageUpdate}
                          allPermissions={this.props.permissions}
                          modalType={this.state.modalType}
                          roleName={this.state.modalType === 'new' ? '' : row.displayName}
                          roleId={this.state.roleId}
                          currentPermissions={this.props.data}
                        />
                      }
                      <td><Button
                        className="button-secondary buttons-with-icons"
                        onClick={() => this.openModal('created', 'update', row.id)}
                      >
                        <i className="flaticon-cogwheel-2" />
                        <span className="actions-span margin-buttons">
                          Actions
                          </span>
                      </Button>
                      </td>
                      <td>{row.displayName}</td>
                      <td>
                        {
                          row.permissions.map((permission) => {
                            return (
                              <div>
                                {permission}
                              </div>
                            )
                          })
                        }
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </CardBox>
    );
  }
}


export default BasicTable;
