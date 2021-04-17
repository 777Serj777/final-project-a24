import styled from "styled-components";

const StylePost = styled.span`



`

const Post = ({children, ...props}) => {

    
    return (
        <StylePost {...props}>
            
        </StylePost>
    )
}


export default Post;