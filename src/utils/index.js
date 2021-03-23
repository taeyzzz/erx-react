import 'whatwg-fetch'

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export function call({ url, method, payload, signal }) {
	const serverUrl = `${REACT_APP_BACKEND_URL}${url}`
	return fetch(serverUrl, {
		method,
		signal,
		// credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload)
	})
		.then(parseJSON)
		.then(checkHttpStatus)
		.catch(error => {
			// No response from the server
			if (typeof error.response === 'undefined') {
				error.response = {
					status: 408,
					message: 'Cannot connect to the server'
				}
			}
			throw error
		})
}

export function get({ url, signal }) {
	return call({ url, method: 'GET', signal })
}

export function post({ url, payload, signal }) {
	return call({ url, method: 'POST', payload, signal })
}

export function checkHttpStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.body
	} else {
		var error = new Error(response.statusText)
		error.response = response.body
		error.status = response.status
		throw error
	}
}

export function parseJSON(response) {
	return response
		.json()
		.then(function (body) {
			return {
				status: response.status,
				statusText: response.statusText,
				body: body
			}
		})
		.catch(function (e) {
			return response
		})
}

export const FETCH_STATUS_REQUEST = 'request'
export const FETCH_STATUS_SUCCESS = 'success'
export const FETCH_STATUS_FAILURE = 'failure'
export const FETCH_STATUS_IDLE = 'idle'
