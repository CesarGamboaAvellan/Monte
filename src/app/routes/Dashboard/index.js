import React from 'react';
import { connect } from 'react-redux'
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import UserProfileCard from '../../../components/dashboard/Common/userProfileCard/UserProfileCard';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                roleTitle: '',
                profileUrl: '',
                description: '',
            }
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
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage" />} />
                <UserProfileCard userData={this.state.user} addStyle="max-width-small-boxes" />
            </div>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const userLoggedIn = auth;
    return { userLoggedIn }
};
export default connect(mapStateToProps)(Dashboard);
