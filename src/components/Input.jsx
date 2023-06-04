import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 45px;
    color: #D4D4D4;
    background-color: #FFFFFF;
	border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    padding: 11px;

    ::placeholder {
        color: #DBDBDB
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
    }
`;

export default Input;