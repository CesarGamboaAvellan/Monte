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
    }
  }
  openModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }
  render() {
    console.log('this props in table roles', this.props);
    return (
      <CardBox styleName="col-12" cardStyle="p-0 overflow-hidden"
        heading={<IntlMessages id="table.Roles" />}
        headerOutside>
        <div>
          <Table hover size="sm">
            <thead>
              <tr className="gray-color">
                <th>Actions</th>
                <th>Roles</th>
                <th>Permissions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {

                  this.props.data && this.props.data.map((row) => {
                    return (
                      <React.Fragment>
                        {
                          this.state.showModal && <RolesModal
                            action="Update"
                            showModal={this.openModal}
                            allPermissions={this.props.permissions}
                            roleName={row.displayName}
                            currentPermissions={this.props.data}
                          />
                        }
                        <td><Button
                          className="button-secondary"
                          onClick={this.openModal}
                        >
                          <i className="zmdi zmdi-settings zmdi-hc-fw" />
                          <span className="actions-span">
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
                      </React.Fragment>
                    )
                  })
                }
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBox>
    );
  }
}


export default BasicTable;
