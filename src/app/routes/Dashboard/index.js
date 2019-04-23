import React from 'react';
import { connect } from 'react-redux'
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import UserProfileCard from '../../../components/dashboard/Common/userProfileCard/UserProfileCard';
import FadeIn from 'react-fade-in';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                roleTitle: '',
                profileUrl: '',
                description: '',

            },
            text: [],
        }
    }
    componentDidMount = () => {
        if (this.props.userLoggedIn) {
            const user = this.props.userLoggedIn;
            this.setState({
                user: user.authUser.data ? user.authUser.data.result : user.authUser.result,
            })
        }
    }
    render() {
        const text = ['hello ', 'Monte, ', 'is ', 'this ', 'what ', 'you ', 'want ', 'for ', 'the ', 'domains? '];

        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage" />} />
                <UserProfileCard userData={this.state.user} addStyle="max-width-small-boxes" />
                <div className="display-flex">
                    {
                        text.map((word, index) => <FadeIn delay={(index * 1000) / 3}>
                            <span className="margin-test"
                            >{word}
                            </span>
                        </FadeIn>)
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const userLoggedIn = auth;
    return { userLoggedIn }
};
export default connect(mapStateToProps)(Dashboard);
