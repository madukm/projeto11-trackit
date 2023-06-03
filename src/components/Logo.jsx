import styled from 'styled-components';
import logo from '../assets/logo.svg';

export default function Logo() {
    return (
        <LogoContainer>
            <img src={logo} />
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    width: 180px;
`;
