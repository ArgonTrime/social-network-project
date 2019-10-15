import React from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        // if (!userId) {userId = 2}
        // componentsAPI.getProfile(userId).then(data => {
        //     this.props.setUserProfile(data);
        // });
    };

    render() {

        return (
            <div>
                <ProfilePage {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


// let AuthRedirectComponent = withAuthRedirect(ProfilePageContainer);
// let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer);