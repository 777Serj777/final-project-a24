import styled from "styled-components";

const StyleImage = styled.img`

    width: 100%;
    height: 100%;

`

const Image = ({children, ...props}) => {

    return (
        <StyleImage {...props}>
            {children}
        </StyleImage>
    )
}


export default Image;