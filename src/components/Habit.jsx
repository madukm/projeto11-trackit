import styled from 'styled-components';
import Input from './Input';
import { useState } from 'react';
import { isAuthenticated } from '../requests';
import trashIcon from '../assets/dump.svg';

export default function Habit({ name, days }) {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	
	const selectedDays = days.reduce((map, day) => {
		map.set(day, true);
		return map;
	}, new Map());

	return (
		<Container>
			<h1>{name}</h1>
				<Days>
					{weekDays.map((day, index) => (
						<DayButton
							type='button'
							key={index}
							color={selectedDays.has(index) ? 'white' : '#CFCFCF'}
							background={selectedDays.has(index) ? '#CFCFCF' : 'white'}
						>
							{day.charAt(0)}
						</DayButton>
					))}
				</Days>
			<img src={trashIcon}/>
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
	img {
		position: absolute;
		top: 10px;
		right: 9px;
	}
	h1 {
		color: #666666;
		font-size: 20px;
	}
`;

const Days = styled.div`
	display: flex;
	gap: 4px;
	margin-top: 8px;
`;


const DayButton = styled.button`
	width: 30px;
	height: 30px;
	color: ${props => props.color};
	background-color: ${props => props.background};
	border: 1px solid #D4D4D4;
	border-radius: 5px;
`;