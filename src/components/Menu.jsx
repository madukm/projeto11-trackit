import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
	const navigate = useNavigate();

	return (
		<Container>
			<Button onClick={() => navigate('/habitos')}>Hábitos</Button>
			<Button>Histórico</Button>
		</Container>
	);
}

const Button = styled.button`
	background-color: white;
	border: none;
	font-size: 18px;
	color: #52B6FF;
`;

const Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	padding: 0 36px;
	position: fixed;
  	bottom: 0;
	
`;

