import styled from "styled-components";
import MiniLogo from "./MiniLogo";
import ProfilePhoto from "./ProfilePhoto";

export default function TopBar() {
	
	return (
		<Container data-test="header">
			<MiniLogo />
			<ProfilePhoto />
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 70px;
	background-color: #126BA5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 11px 18px;
	position: fixed;
  	top: 0;
	z-index: 1;
`;

