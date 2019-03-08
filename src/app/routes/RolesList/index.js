import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import Table from '../../../components/Table/basic/index';

class RolesList extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          <Table selectedWidth="width-100" />
        </div>

      </div>
    );
  }
}

export default RolesList;
