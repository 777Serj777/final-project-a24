import styled from "styled-components";

const StyleColumn = styled.div`

   margin: ${props => props.mCenter && '0 auto' || 0}

`

const Column = ({children, ...props}) => {

    return (
        <StyleColumn {...props}>
            {children}
        </StyleColumn>
    )
}


export default Column;