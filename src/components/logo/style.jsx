import styled from "styled-components";



export const StyleLogo = styled.div`

    display: flex;
    align-items: center;
    margin-top: ${props => props.mt+'rem' || 0};
    margin-bottom: ${props => props.mb+'rem' || 0};

    
    img{
        width: 10rem;
        height: 10rem;
        margin-right: .9rem;
    }
    h1{
        font-size: 7.2rem;
       
    }
`


