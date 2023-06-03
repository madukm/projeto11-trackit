import axios from "axios";

export function signUpRequest(obj, callbackSuccess, callbackError) {
	axios
		.post(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
			obj
		)
		.then(
			({ data }) => callbackSuccess(data)
		)
		.catch((error) => {
			console.log(error);
			callbackError(error);
		})
}

export function LoginRequest(obj, callbackSuccess, callbackError) {
	axios
		.post(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
			obj
		)
		.then(
			({ data }) => callbackSuccess(data)
		)
		.catch((error) => {
			console.log(error);
			callbackError(error);
		})
}