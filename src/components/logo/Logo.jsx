import React from 'react';
import { StyleLogo } from './style';

const Logo = (props) => {

    return (
    
        <StyleLogo {...props}>
            <img src="img/logo.png" alt = 'logo'/>
            <h1>HIPSTAGRAM</h1>
        </StyleLogo>

    )
}

export default Logo;