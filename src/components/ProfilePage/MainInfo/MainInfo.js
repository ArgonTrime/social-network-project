import React from 'react';
import s from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <div className={s.mainInfo}>
            <img className={s.mainImage} src='https://www.ionos.ca/digitalguide/fileadmin/DigitalGuide/Teaser/social-media-plattformen-t.jpg' alt='social network'/>
            <img className={s.mainAvatar} src='https://www.shareicon.net/download/2017/02/05/878221_user_512x512.png' alt='avatar'/>
            <div>
                <h1>
                    Ihar Trymailau
                </h1>
            </div>
            <div>
                Date of Birth: 25 december
            </div>
            <div>
                City: Minsk
            </div>
            <div>
                Educations: BSUPC
            </div>
            <div>
                Web Site: <a href=''>Social Network</a>
            </div>
        </div>
    );
}

export default MainInfo;