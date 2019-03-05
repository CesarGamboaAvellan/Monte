import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import UserProfileCard from '../../../components/dashboard/Common/userProfileCard/UserProfileCard';
import ContactCard from '../../../components/Cards/Contact/index';
import { connect } from 'react-redux'
import IntlMessages from 'util/IntlMessages';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount = () => {
        if (this.props.userLoggedIn) {
            const user = this.props.userLoggedIn;
            this.setState({
                user: user.authUser.data.result,
            })
        }
    }
    render() {
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
                    <UserProfileCard userData={this.state.user} addStyle="min-height-boxes" />
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

const mapStateToProps = ({ auth }) => {
    const userLoggedIn = auth;
    return { userLoggedIn }
};

export default connect(mapStateToProps)(Profile);
