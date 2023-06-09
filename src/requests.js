import axios from "axios";

export function signUpRequest(obj, callbackSuccess, callbackError) {
	axios
		.post(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
			obj
		)
		.then(({ data }) => callbackSuccess(data))
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
		.then(({ data }) => {
			console.log(data);
			callbackSuccess(data);
		})
		.catch((error) => {
			console.log(error);
			callbackError(error);
		})
}


export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    if (!user) return {};
    return JSON.parse(user);
}

export const getCompletedHabits = () => {
	const number = localStorage.getItem('habits');
	if (number === null) return 0;
	return number;
}

export function ListHabits(token, callbackSuccess) {
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	
	axios
		.get(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
			config
		)
		.then(({ data }) => callbackSuccess(data))
		.catch((error) => {
			console.log(error);
		})
}

export function CreateHabit(token, obj, callbackSuccess) {
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	axios
		.post(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
			obj,
			config
		)
		.then(({ data }) => callbackSuccess(data))
		.catch((error) => {
			console.log(error);
		})
}

export function DeleteHabit(id, token, callbackSuccess) {
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	axios
		.delete(
			`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
			config
		)
		.then(({ data }) => callbackSuccess(data))
		.catch((error) => {
			console.log(error);
		})
}


export function GetTodayHabits(token, callbackSuccess) {
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	
	axios
		.get(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
			config
		)
		.then(({ data }) => callbackSuccess(data))
		.catch((error) => {
			console.log(error);
		})
}

export function CheckHabit(token, id, callbackSuccess) {
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	axios
		.post(
			`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
			{},
			config
		)
		.then(({ data }) => callbackSuccess(data))
		.catch((error) => {
			console.log(error);
		})
	
}