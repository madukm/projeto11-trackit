import styled from "styled-components";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import plus from '../assets/plus.svg';
import { useEffect, useState } from "react";
import { ListHabits } from "../requests";
import AddHabit from "../components/AddHabit";
import { isAuthenticated } from "../requests";
import MyHabit from "../components/MyHabit";

export default function HabitsPage() {
    const [habits, setHabits] = useState([]);
    const [displayed, setDisplayed] = useState(false);
    const user = isAuthenticated();
    
    
    function callbackSuccess( list ) {
        setHabits(list);
    }

    useEffect(() => {
        ListHabits(user.token, callbackSuccess);
    }, []);
	
	return (
		<>
			<TopBar />
			<Container>
                <HorizontalDisplay>
                    <h1>Meus hábitos</h1>
                    <PlusButton onClick={() => setDisplayed(true)} data-test="habit-create-btn">
                        <img src={plus} />
                    </PlusButton>
                </HorizontalDisplay>
                {displayed && <AddHabit setDisplayed={setDisplayed}/>}
                {habits.length === 0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
                {habits.map( habit => <MyHabit id={habit.id} name={habit.name} days={habit.days}/>)}
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
    padding: 28px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    p {
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }
    
`;

const HorizontalDisplay = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 23px;
        color: #126BA5;
    }
    
`;

const PlusButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.6px;
    border: none;
`;

