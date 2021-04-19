import styled from "styled-components";


const StyleAvatar = styled.div`
    
    width: 100%;
    height: 100%;
    max-width: ${({maxWidth}) => maxWidth || '13.4rem'};
    max-height: ${({maxHeight}) => maxHeight || '13.4rem'};
    min-height: ${({minHeight}) => minHeight || '13.4rem'};
    border-radius: 50%;
    overflow: hidden;
    border: none;
    background: ${({imgUrl}) => (imgUrl) ? `url(${imgUrl})` : 'grey'} no-repeat center/cover;
`

const Avatar = ({imgUrl, ...props}) => {

    return (
        <StyleAvatar imgUrl = {imgUrl} {...props}/>    
    )
}


export default Avatar;