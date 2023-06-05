import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest } from "../requests";
import UserContext from "../userContext";

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	// const {user, setUser} = useContext(UserContext);

	const navigate = useNavigate();

	function loginSuccess( {id, name, image, token}) {
		const data = {id, name, image, token};
		localStorage.setItem('user', JSON.stringify(data));
		setLoading(false);
		navigate('/hoje');
	}

	function loginError() {
		setLoading(false);
		alert('Email ou senha incorretos. Tente novamente!');
	}

	function login(e) {

		e.preventDefault();

		const loginObj = {email, password};

		setLoading(true);

    LoginRequest(loginObj, loginSuccess, loginError);
	}

	return (
		<Container>
			<Logo />
			<form onSubmit={login}>
				<Input
					type='email'
					placeholder='email'
					value={email}
					disabled={loading}
					onChange={ (e) => setEmail(e.target.value)}
					required
        />
        <Input
          type='password'
          placeholder='senha'
          value={password}
		disabled={loading}
          onChange={ (e) => setPassword(e.target.value)}
					required
				/>
				<FormButton 
					type="submit" 
					text="Entrar"
					loading={loading}
					disabled={loading}
					/>
			</form>
			<StyledLink to='/cadastro'>Não tem uma conta? Cadastre-se!</StyledLink>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 32px;
	margin: 68px 36px;
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
	}
`;

const StyledLink = styled(Link)`
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
	text-decoration: underline;
`
