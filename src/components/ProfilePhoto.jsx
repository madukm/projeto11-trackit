import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../requests';

export default function ProfilePhoto() {
    const [image, setImage] = useState('');
    
    useEffect(() => {
        const user = isAuthenticated();
        setImage(user.image);
    })

    return (
        <Container>
            <img src={image} data-test="avatar"/>
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
