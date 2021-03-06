import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import List from '../../../components/todo/ToDoList/index';

class UserList extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage" />} />
        <div className="d-flex justify-content-center">
          <List />
        </div>

      </div>
    );
  }
}

export default UserList;
