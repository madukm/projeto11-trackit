import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

const FormButton = ({ text, loading = false, disabled }) => {
    return (
      <ButtonStyle disabled={disabled}>
        {loading ? <ThreeDots color="#FFF" /> : text }
      </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    width: 100%;
    height: 45px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    padding: 11px;
    font-size: 21px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    
    .three-dots {
        color: white;
    }
`;

export default FormButton;