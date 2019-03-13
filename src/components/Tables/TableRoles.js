import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import { Table, Button } from 'reactstrap';


const BasicTable = (props) => {
  return (
    <CardBox styleName="col-12" cardStyle="p-0 overflow-hidden"
      heading={<IntlMessages id="table.Roles" />}
      headerOutside>
      <div>
        <Table hover size="sm">
          <thead>
            <tr className="gray-color">
              {/* {
                props.data.headers.map((tableHeader) => {
                  return (
                    <th className="border-top-0">{tableHeader}</th>
                  )
                })
              } */}
              <th>Actions</th>
              <th>Roles</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {

                props.data && props.data.map((row) => {
                  return (
                    <React.Fragment>
                      <td><Button className="button-secondary">
                        <i className="zmdi zmdi-edit zmdi-hc-fw" />
                        <span>
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


export default BasicTable;