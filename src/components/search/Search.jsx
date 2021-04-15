import styled from "styled-components";


const StyleSearch = styled.div`
    
    border-radius: .5rem;
    width: 100%;
    max-width: 29.7rem;
    height: 2.9rem;
    overflow: hidden;
    background: #fff url('img/search.svg') no-repeat 1.1rem 50%;
    margin-left: ${({ml}) => ml || 0};
    margin-right: ${({mr}) => mr || 0};


    input {
        padding-left: 5rem;
        width: inherit;
        height: inherit;
        border: none;
        outline: none;
        background-color: transparent;
    }
`

const Search  = props => {


    return (
        <StyleSearch {...props}>
            <input/>
        </StyleSearch>   
    )

}


export default Search;