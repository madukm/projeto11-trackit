import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage( props ) {
    
	const { setToken } = props

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function login(e) {

		e.preventDefault();

		const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/camppi/auth/login';
    const newLogin = {email, password};

		setLoading(true);

    const promise = axios.post(URL, newLogin);

    promise.then( ans => {
			setLoading(false);
      setToken(ans.data.token);
      navigate('/hoje');

    });

    promise.catch( err => {
			setLoading(false);
			alert('Email ou senha incorretos. Tente novamente!');
		});
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
				<Button 
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
