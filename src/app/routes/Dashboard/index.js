import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import UserProfileCard from '../../../components/dashboard/Common/userProfileCard/UserProfileCard';

class SamplePage extends React.Component {

    render() {
        const data = {
            name: "Cesar",
            roleTitle: 'Programmer',
            profileUrl: 'https://ycfuv37ksn-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/Cesar-300x300.jpg',
            description: "Level 1 user"
        }
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage" />} />
                <UserProfileCard userData={data} addStyle="max-width-small-boxes" />
            </div>
        );
    }
}

export default SamplePage;
