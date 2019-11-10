import React from 'react';
import s from './Preloader.module.css'
import loading from '../../image/loading.svg';

let Preloader = () => {
    return <div className={s.preloader}>
        {/*<img src='http://www.eugateway.in/wp-content/themes/eugateway/images/orange-loader_simple.gif?x79602'/>*/}
        <img src={loading}/><span>Loading ...</span>
    </div>
}

export default Preloader;