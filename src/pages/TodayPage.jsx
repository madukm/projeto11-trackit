import styled from "styled-components";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { GetTodayHabits } from "../requests";
import { isAuthenticated } from "../requests";
import { getCompletedHabits } from "../requests";
import TodayHabit from "../components/TodayHabit";

export default function TodayPage() {
	const [todayHabits, setTodayHabits] = useState([]);
	const user = isAuthenticated();
	const today = new Date();
  const options = { weekday: 'short', day: 'numeric', month: 'numeric' };
  const formattedDate = today.toLocaleDateString('pt-PT', options);
	const completedHabits = getCompletedHabits();

	function callbackSuccess( list ) {
		setTodayHabits(list);
	}

	useEffect(() => {
		GetTodayHabits(user.token, callbackSuccess);
		
	})

	return (
		<>
			<TopBar />
			<Container color={completedHabits === 0 ? '#BABABA' : '#8FC549'}>
				<h1 data-test="today">{formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}</h1>
				<h2 data-test="today-counter">
					{completedHabits === 0 ? 'Nenhum hábito concluído ainda' : `${completedHabits}% dos hábitos concluídos`}
				</h2>
				<Center>
					{todayHabits.map( habit => <TodayHabit id={habit.id} name={habit.name} days={habit.days}/>)}
				</Center>
			</Container>
			<Menu />
		</>
		
	);
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 70px;
	margin-bottom: 70px;
	background: #F2F2F2;
	display: flex;
	flex-direction: column;
	padding: 28px 18px;

	h1 {
		color: #126BA5;
		font-size: 23px;
		margin-bottom: 5px;
	}
	h2 {
		color: ${props => props.color};
		font-size: 18px;
	}
`;

const Center = styled.div`
	display: flex;
	width: 100%;
	margin-top: 28px;
`
