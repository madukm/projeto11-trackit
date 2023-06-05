import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../userContext';
import { isAuthenticated } from '../requests';

export default function ProfilePhoto() {
    const [image, setImage] = useState('');
    
    useEffect(() => {
        const user = isAuthenticated();
        setImage(user.image);
    })

    return (
        <Container>
            <img src={image} />
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
