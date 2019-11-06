import React from 'react';
import s from './MainInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const MainInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.mainInfo__Block}>
            <div>
                <img className={s.main__ImageLogo} src='https://www.ionos.ca/digitalguide/fileadmin/DigitalGuide/Teaser/social-media-plattformen-t.jpg'/>
            </div>
            <div className={s.mainInfo__userBlock}>
                <div>
                    {/*adding user avatar is null*/}
                    <img src={profile.photos.small != null ? profile.photos.small : ''}/>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};
export default MainInfo;