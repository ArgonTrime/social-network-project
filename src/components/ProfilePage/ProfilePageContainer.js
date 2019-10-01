import React from 'react';
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });

    }

    render() {
        return (
            <div>
                <ProfilePage {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profile
});
export default connect(mapStateToProps, {setUserProfile})(ProfilePageContainer);