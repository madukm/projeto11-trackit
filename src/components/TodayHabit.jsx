import styled from 'styled-components';
import Input from './Input';
import { useEffect, useState } from 'react';
import { getCompletedHabits, isAuthenticated } from '../requests';
import checkIcon from '../assets/check.svg';
import { CheckHabit } from '../requests';

export default function TodayHabit({ id, name, done, currentSequence, highestSequence }) {
	const user = isAuthenticated();
    const [checked, setChecked] = useState(done);
    
    function callbackSuccess() {
        setChecked(true);
    }

	function handleClick() {
		CheckHabit(user.token, id, callbackSuccess);
	}

	return (
		<Container data-test="today-habit-container">
            <ColumnDisplay>
                <h1>{name}</h1>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </ColumnDisplay>
            <IconColor 
                onClick={handleClick} 
                background={checked ? '#8FC549' : '#E7E7E7'}>
                <img src={checkIcon} />
            </IconColor>
		</Container>
	);
}

const Container = styled.div`
    width: 100%;
	padding: 18px;
	border-radius: 5px;
	background: white;
	position: relative;
    display: flex;
    justify-content: space-between;
	h1 {
		color: #666666;
		font-size: 20px;
	}
`;

const ColumnDisplay = styled.div`
	display: flex;
    flex-direction: column;
	gap: 7px;
`;

const IconColor = styled.div`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 35px;
    }
`

