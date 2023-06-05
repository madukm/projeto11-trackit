import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
	const navigate = useNavigate();

	return (
		<Container>
			<Button onClick={() => navigate('/habitos')}>Hábitos</Button>
			<Button onClick={() => navigate('/hoje')}>
				<ProgressBarStyle
					value={20}
					text='Hoje'
					background
					backgroundPadding={6}
					styles={buildStyles({
						textSize: "18px",
						textColor: 'white',
						pathColor: 'white',
						trailColor: 'transparent',
						backgroundColor: '#52B6FF',

					})}
				/>
			</Button>
			<Button onClick={() => navigate('/historico')}>Histórico</Button>
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
	background: white;
	height: 70px;
	display: flex;
	justify-content: space-between;
	padding: 0 36px;
	position: fixed;
  	bottom: 0;
	
`;

const ProgressBarStyle = styled(CircularProgressbar)`
	width: 91px;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
`;