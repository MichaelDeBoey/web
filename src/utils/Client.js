import axios from 'axios'
import Cookies from 'js-cookie'
import redirectTo from './redirectTo'
import { logout } from './auth'

class Client {
	constructor() {
		this.clientId = process.env.AURALITE_ID
		this.clientSecret = process.env.AURALITE_SECRET
		this.apiToken = Cookies.get('auralite_token')
		this.baseURL = process.env.NEXT_PUBLIC_AURALITE_URL

		this.client = axios.create({
			baseURL: this.baseURL,
			headers: {
				Accept: 'application/json',
				...(this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {}),
			},
		})

		this.client.interceptors.response.use(
			(response) => response.data,
			(error) => {
				if (error.response.status === 417 && error.response.data._force_redirect_to) return redirectTo(error.response.data._force_redirect_to)
				if (error.response.status === 401) return logout()

				return Promise.reject(error)
			}
		)
	}

	login({ email, password }) {
		return this.client.post('/oauth/token', {
			grant_type: 'password',
			client_id: this.clientId,
			client_secret: this.clientSecret,
			username: email,
			password,
			scope: '*',
		})
	}

	register({ email, password, code }) {
		return this.client.post('/oauth/register', {
			client_id: this.clientId,
			client_secret: this.clientSecret,
			email,
			password,
			code,
		})
	}

	user() {
		return this.client.get('/api/user')
	}

	profile({ handle }) {
		return this.client.get(`/api/profiles/${handle}`)
	}

	updateProfile({ bio, avatar }) {
		return this.client.post('/api/profile/update', { bio, avatar })
	}

	timeline({ page = 1, includeRead = true }) {
		return this.client.get(`/api/timeline${includeRead ? '' : '/unread'}?page=${page}`)
	}

	notifications() {
		return this.client.get('/api/notifications')
	}

	search({ query, page = 1 }) {
		return this.client.get(`/api/search?q=${query}&page=${page}`)
	}

	post({ postId }) {
		return this.client.get(`/api/posts/${postId}`)
	}

	createPost({ post, reply_to, privacy, images }) {
		return this.client.post('/api/posts', { content: post, reply_to, privacy, images })
	}

	deletePost({ postId }) {
		return this.client.delete(`/api/posts/${postId}`)
	}

	markNotificationRead({ id }) {
		return this.client.post(`/api/notifications/${id}/read`)
	}

	resendEmailVerification() {
		return this.client.post('/api/onboarding/email-verification/resend')
	}

	createProfile({ name, handle, bio, avatar }) {
		return this.client.put('/api/onboarding/profile', { name, handle, bio, avatar })
	}

	startIdentityVerification() {
		return this.client.post('/api/onboarding/identity/start')
	}

	launchCheckout({ plan }) {
		return this.client.post('/api/onboarding/subscription/checkout', { plan })
	}

	updateEmail({ email }) {
		return this.client.post('/api/user/update', { email })
	}

	updatePassword({ password, confirmPassword }) {
		return this.client.post('/api/user/security', { password, password_confirmation: confirmPassword })
	}

	updateAuthToken(token) {
		this.apiToken = token
		this.client.defaults.headers.Authorization = `Bearer ${token}`
	}

	redirectToBilling() {
		return this.client.post('/api/user/billing')
	}

	connectTwitter() {
		redirectTo(`${this.baseURL}/connections/twitter?token=${encodeURIComponent(this.apiToken)}`)
	}

	unlinkTwitter() {
		return this.client.delete('/api/connections/twitter')
	}

	markPostRead({ postId }) {
		return this.client.post(`/api/posts/${postId}/view`)
	}

	async uploadFile({ file, progress = () => {} }) {
		const response = await this.client.post('/api/asset-upload', { content_type: file.type })

		let headers = response.headers

		if ('Host' in headers) delete headers.Host

		return axios
			.put(response.url, file, {
				headers,
				onUploadProgress: (progressEvent) => progress(progressEvent.loaded / progressEvent.total),
			})
			.then(() => ({ ...response, extension: file.name.split('.').pop() }))
	}
}

export default new Client()
