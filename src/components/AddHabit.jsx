import styled from 'styled-components';
import Input from './Input';
import { useState } from 'react';
import FormButton from './FormButton';
import { CreateHabit, isAuthenticated } from '../requests';

export default function AddHabit({ setDisplayed }) {
	const user = isAuthenticated();	

	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);
	const [selectedDays, setSelectedDays] = useState(new Map());

	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

	const handleButtonClick = (day) => {
		const updatedSelectedDays = new Map(selectedDays);
		if (updatedSelectedDays.has(day)) {
		updatedSelectedDays.delete(day);
		} else {
		updatedSelectedDays.set(day, true);
		}
		setSelectedDays(updatedSelectedDays);
	};

	function addHabitSuccess() {
		setLoading(false);
		setName('');
		setSelectedDays(new Map());
		setDisplayed(false);
		window.parent.location.reload();
	}
	
	function addHabitFail() {
		setLoading(false);
		setName('');
		setSelectedDays(new Map());
		alert('Não foi possível adicionar o hábito. Tente novamente!');
	}

	function addNewHabit(e) {
		e.preventDefault();
		console.log(selectedDays);
		const newHabitObj = {name: name, days: Array.from(selectedDays.keys())};
		CreateHabit(user.token, newHabitObj, addHabitSuccess, addHabitFail);
		setLoading(true);
		
	}
	return (
		<Container data-test="habit-create-container">
			<form onSubmit={addNewHabit}>
				<Input
					type='name'
					placeholder='nome do hábito'
					value={name}
					onChange={ (e) => setName(e.target.value)}
					required
					disabled={loading}
					data-test="habit-name-input"
				/>
				<Days>
					{weekDays.map((day, index) => (
						<DayButton
							type='button'
							key={index}
							color={selectedDays.has(index) ? 'white' : '#CFCFCF'}
							background={selectedDays.has(index) ? '#CFCFCF' : 'white'}
							onClick={() => handleButtonClick(index)}
							disabled={loading}
							data-test="habit-day"
						>
							{day.charAt(0)}
						</DayButton>
					))}
				</Days>
				<ButtonsContainer>
						<button
							className='back-btn'
							onClick={() => setDisplayed(false)}
							data-test="habit-create-cancel-btn"
							>
						Cancelar
						</button>
						<FormButton
							type='submit'
							text='Salvar'
							loading={loading}
							disabled={loading}
							data-test="habit-create-save-btn"
						/>
				</ButtonsContainer>
				
			</form>
		</Container>
	);
}

const Container = styled.div`
  width: 100%;
	margin: 0 17px;
	padding: 18px;
	background: white;
	border-radius: 5px;
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

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 36px;
	gap: 23px;
	.back-btn {
		color: #52B6FF;
		background: white;
		border: none;
	}
	button {
		width: 84px;
		height: 35px;
		font-size: 16px;
	}
`;
