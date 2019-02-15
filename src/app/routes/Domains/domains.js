import OrderTable from '../../../components/dashboard/eCommerce/OrderTable';

import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class SamplePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
                <OrderTable />
            </div>
        );
    }
}

export default SamplePage;
