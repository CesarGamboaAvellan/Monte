import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import Gallery from '../../../components/dashboard/Common/PhotoCollage/index';

class Test extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} />
                <div className="d-flex justify-content-center">
                   <Gallery />
                   <Gallery />
                   
                </div>

            </div>
        );
    }
}

export default Test;