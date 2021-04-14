import styled from "styled-components";

const StyleFlex = styled.div`

    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${props => (props.justifyCenter && 'center') || 'stretch'};
    align-items: ${props => (props.alignCenter && 'center') || 'stretch'};
    flex-direction: ${props => (props.column && 'column') || 'row'};


`

const Flex = ({children, ...props}) => {

    return (
        <StyleFlex {...props}>
            {children}
        </StyleFlex>
    )
}


export default Flex;