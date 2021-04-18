import styled from "styled-components";

const StyleFlex = styled.div`

    display: flex;
    width: 100%;
    max-width: ${({maxWidth}) => maxWidth || '100%'};
    min-width: ${({minWidth}) => minWidth || 'auto'};
    max-height: ${({maxHeight}) => maxHeight || '100%'};
    min-height: ${({minHeight}) => minHeight || 'auto'};
    margin-right: ${({mr}) => mr || 0};
    height: ${({height}) => height || '100%'};
    justify-content: ${({justify}) => (justify) || 'stretch'};
    align-items: ${({align}) => (align) || 'stretch'};
    flex-direction: ${props => (props.column && 'column') || ''};



`

const Flex = ({children, ...props}) => {

    return (
        <StyleFlex {...props}>
            {children}
        </StyleFlex>
    )
}


export default Flex;