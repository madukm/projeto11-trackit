import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../userContext';

export default function ProfilePhoto() {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <Container>
            <img src={user.image} />
        </Container>
    )
}

const Container = styled.div`
    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;
