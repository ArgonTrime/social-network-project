import React from 'react';
import s from './MainInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const MainInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.mainInfo__Block}>
            <div>
                <img className={s.main__ImageLogo} src='https://www.ionos.ca/digitalguide/fileadmin/DigitalGuide/Teaser/social-media-plattformen-t.jpg'/>
            </div>
            <div className={s.mainInfo__userBlock}>
                <div>
                    <img src={props.profile.photos.small}/>
                </div>
                <div className={s.mainInfo__userInfo}>
                    <h1>{props.profile.fullName}</h1>
                    <p>{props.profile.aboutMe}</p>
                    <p>Work: {props.profile.lookingForAJob ? 'yes' : 'no'}</p>
                    <p>Searching work: {props.profile.lookingForAJobDescription}</p>
                    <p>Contacts: {props.profile.contacts.vk
                        ? <a href={props.profile.contacts.vk}><img className={s.contacts__Images} src='https://icon-library.net/images/vk-icon-png/vk-icon-png-23.jpg'/></a>
                        : ''}</p>
                </div>
                <ProfileStatus status='test'/>
            </div>
        </div>
    );
};

export default MainInfo;