import {Field} from "redux-form";
import React from "react";

export const createFields = (placeholder, component, name, propsType = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               component={component}
               name={name}
               {...propsType}/>
               {text}
    </div>
);
