import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import UserProfileCard from '../../../components/dashboard/Common/userProfileCard/UserProfileCard';
import ContactCard from '../../../components/Cards/Contact/index';
import IntlMessages from 'util/IntlMessages';

class SamplePage extends React.Component {
    render() {
        const data = {
            name: "Cesar",
            roleTitle: 'Programmer',
            profileUrl: 'https://ycfuv37ksn-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/Cesar-300x300.jpg',
            description: "Level 1 user"
        }
        const contactData = {
            phoneNumber: "+01-992-856-8535",
            email: "cesar@firstfactory.com",
            facebook: "CesarGamboa",
            twitter: "-",
            Address: "Heredia, Costa Rica"
        }
        return (
            <div className="app-wrapper">
                <div className="d-flex justify-content-center margin-elements">
                    <UserProfileCard userData={data} addStyle="min-height-boxes" />
                </div>
                <div className="d-flex justify-content-center margin-elements">
                    <ContactCard basicInformation={contactData}
                        buttonText="Edit basic information"
                    />
                </div>


            </div>
        );
    }
}

export default SamplePage;
