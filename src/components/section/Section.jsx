import styled from "styled-components";



const StyleSection = styled.section`

    display: ${({flex}) => (flex && 'flex') || 'block'};
    


    ${({addStyle}) => addStyle};

`

const Section = ({children, ...props}) => {

    return (
        <StyleSection {...props}>
            {children}
        </StyleSection>
    )
}



export default Section;