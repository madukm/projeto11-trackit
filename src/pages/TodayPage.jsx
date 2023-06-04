import styled from "styled-components";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";

export default function TodayPage() {
	
	return (
		<>
			<TopBar />
			<Container>
				<h1></h1>
			</Container>
			<Menu />
		</>
		
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 70px;
	margin-bottom: 70px;
	background: #F2F2F2;
`;