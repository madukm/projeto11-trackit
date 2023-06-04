import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpRequest } from "../requests";

export default function SignUpPage( props ) {
    
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(false);
	
	const navigate = useNavigate();

	function signUpSuccess() {
		setLoading(false);
		alert('Usuário cadastrado com sucesso!');
		navigate('/');
	}

	function signUpError() {
		setLoading(false);
		alert('Não foi possível cadastrar o usuário. Por favor, tente novamente.');
	}

	function signUp(e) {

		e.preventDefault();

    const signUpObj = {email, name, image, password};

		setLoading(true);

		signUpRequest(signUpObj, signUpSuccess, signUpError);

	}

	return (
		<Container>
			<Logo />
			<form onSubmit={signUp}>
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
				<Input
          type='name'
          placeholder='nome'
          value={name}
					disabled={loading}
          onChange={ (e) => setName(e.target.value)}
					required
        />
				<Input
          type='url'
          placeholder='foto'
          value={image}
					disabled={loading}
          onChange={ (e) => setImage(e.target.value)}
					required
        />
				<FormButton 
					type="submit" 
					text="Cadastrar"
					loading={loading}
					disabled={loading}
					/>
			</form>
			<StyledLink to='/'>Já tem uma conta? Faça login!</StyledLink>
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
