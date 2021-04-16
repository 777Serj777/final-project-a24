import styled from "styled-components";


const StyleAvatar = styled.div`
    
    width: 100%;
    height: 100%;
    max-width: ${({maxWidth}) => maxWidth || '13.4rem'};
    max-height: ${({maxHeight}) => maxHeight || '13.4rem'};
    border-radius: 50%;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
    }
`

const Avatar = ({imgUrl, ...props}) => {

    return (
        <StyleAvatar {...props}>
            <img src= {imgUrl} />
        </StyleAvatar>
    )
}



export default Avatar;