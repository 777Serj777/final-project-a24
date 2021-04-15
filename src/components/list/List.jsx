import React from 'react';
import styled from 'styled-components';

const StyleList = styled.ul`

    display: ${({flex}) => (flex && 'flex') || 'block'};
    list-style: none;
  
    li{
        font-size: ${({fSize}) => fSize || '1rem'};
        
      &:not(:last-of-type){
        margin-right: 2.2rem;
      }
        
    }
`

const List = ({children, ...props}) => {

    return (
    
        <StyleList {...props}>
            {children}
        </StyleList>

    )
}



export default List;