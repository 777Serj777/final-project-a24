import styled from "styled-components";

const StyleRow = styled.div`
    display: flex;
    max-width: ${props => props.maxWidth || '100%'};
    max-height: ${props => props.maxHeight || '100%'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
   

`

const Row = ({children, ...props}) => {

    return (
        <StyleRow {...props}>
            {children}
        </StyleRow>
    )
}


export default Row;