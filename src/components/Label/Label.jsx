import styled from "styled-components";

const StyleLabel = styled.label`

font-size: 1.4rem;

span{
    display: block;
    margin-bottom: .7rem;
}

`

const Label = ({children, label, ...props}) => {

    return (
        <StyleLabel {...props}>
            {(label) && <span>{label}</span>}
            {children}
        </StyleLabel>
    )
}


export default Label;