import React from 'react';
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {componentsAPI} from "../../api/api";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        componentsAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
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
let WithUrlDataContainerComponent =  withRouter(ProfilePageContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);