import React from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1569;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);


        // if (!userId) {userId = 2}
        // componentsAPI.getProfile(userId).then(data => {
        //     this.props.setUserProfile(data);
        // });
    };

    render() {

        return (
            <div>
                <ProfilePage {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


// let AuthRedirectComponent = withAuthRedirect(ProfilePageContainer);
// let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer);