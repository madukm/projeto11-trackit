import styled from 'styled-components';
import Input from './Input';
import { useEffect, useState } from 'react';
import { getCompletedHabits, isAuthenticated } from '../requests';
import checkIcon from '../assets/check.svg';
import { CheckHabit } from '../requests';

export default function TodayHabit({ id, name, done, currentSequence, highestSequence }) {
	const user = isAuthenticated();
    
    function callbackSuccess() {

    }

	function handleClick() {
		
	}

	return (
		<Container data-test="today-habit-container">
            <ColumnDisplay>
                <h1>{name}</h1>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </ColumnDisplay>
            <IconColor src={checkIcon} onClick={handleClick} color={done ? '#8FC549' : '#E7E7E7'}/>
		</Container>
	);
}

const Container = styled.div`
    width: 100%;
	margin: 0 17px;
	padding: 18px;
	border-radius: 5px;
	background: white;
	position: relative;
    display: flex;
    align-items: center;
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

const IconColor = styled.img`
    width: 69px;
    backgroundColor: ${props => props.color}
`

