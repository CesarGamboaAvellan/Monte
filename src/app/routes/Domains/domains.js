import OrderTable from '../../../components/dashboard/eCommerce/OrderTable';
import SearchBox from '../../../components/SearchBox/index';
import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class SamplePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.Domains"/>}/>
                <SearchBox styleName="d-none d-lg-block"
                placeholder="Search for a domain here"
                            //    onChange={this.updateSearchText.bind(this)}
                            //    value={this.state.searchText}
                               />
                <OrderTable />
            </div>
        );
    }
}

export default SamplePage;
