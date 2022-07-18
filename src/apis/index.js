import axios from 'axios';

const Api = axios.create({
	baseURL: 'https://api-nodejs-todolist.herokuapp.com',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
});

///Intercept Request
Api.interceptors.request.use(
	async(request) => {
		if(request.data){
			console.debug(`path:[${request.url}] \n payload:${request.data}`);

			request.data = request.data;
		} else {
			console.debug(`path:[${request.url}] \n without payload`);
		}

		return request;
	},
	(error) => Promise.reject(error),
);

///Intercept Response
Api.interceptors.response.use(
	async(response) => {
		console.debug(`Response data : ${response.data}`);
		return response;
	},
	///setup error
	(error) => {status : 'E', message: `Terjadi kesalahan ${error.message}`};

	
);


export default Api;