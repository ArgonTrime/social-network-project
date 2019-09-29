import React from 'react';
import s from './Preloader.module.css'

let Preloader = () => {
    return <div className={s.preloader}>
        <img src='http://www.eugateway.in/wp-content/themes/eugateway/images/orange-loader_simple.gif?x79602'/>
    </div>
}

export default Preloader;