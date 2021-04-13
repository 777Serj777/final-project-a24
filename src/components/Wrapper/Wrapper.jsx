import styled from "styled-components";

const StyleWraper = styled.div`
    max-width: ${props => props.maxWidth || '100%'};
    width: ${props => props.width || '100%'};

`


const Wrapper = ({children, ...props}) => {
    return (
        <StyleWraper props = {props}>
            {children}
        </StyleWraper>
    )
}


export default Wrapper;