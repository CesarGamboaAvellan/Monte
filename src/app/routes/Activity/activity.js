import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class Activity extends React.Component {
    render() {
        console.log('test')
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
                <div className="d-flex justify-content-center">
                    <h1>AActivity page, this will receive a param id, to get the respective task</h1>
                </div>

            </div>
        );
    }
}

export default Activity;
