import styled from 'styled-components';
import miniLogo from '../assets/logo-mini.svg';

export default function MiniLogo() {
    return (
        <MiniLogoContainer>
            <img src={miniLogo} />
        </MiniLogoContainer>
    )
}

const MiniLogoContainer = styled.div`
    height: 49px;
    display: flex;
    align-items: center;
`;
