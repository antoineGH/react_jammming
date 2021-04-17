import { config } from '../config'
const clientId = config.clientId
const redirectUri = 'http://localhost:3000'

let accessToken = ''
const Spotify = {
	getAccessToken() {
		if (accessToken) return accessToken

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1]
			const expiresIn = Number(expiresInMatch[1])

			window.setTimeout(() => (accessToken = ''), expiresIn * 1000)
			window.history.pushState('Access Token', null, '/')
			return accessToken
		} else {
			const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
			window.location = accessURL
		}
	},
	async search(term) {
		const accessToken = Spotify.getAccessToken()
		const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: { Authorization: `Bearer ${accessToken}` } })
		const responseJson = await response.json()
		if (!responseJson.tracks) {
			return []
		}
		return responseJson.tracks.items.map((track) => ({
			id: track.id,
			name: track.name,
			artist: track.artists[0].name,
			album: track.album.name,
			image: track.album.images[2].url,
			uri: track.uri,
		}))
	},
	savePlaylist(name, trackUris) {
		if (!name || !trackUris.length) {
			return
		}
		const accessToken = Spotify.getAccessToken()
		const headers = { Authorization: `Bearer ${accessToken}` }
		let userId

		return fetch('https://api.spotify.com/v1/me', { headers: headers })
			.then((response) => response.json())
			.then((responseJson) => {
				userId = responseJson.id
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, { headers: headers, method: 'POST', body: JSON.stringify({ name: name }) })
			})
			.then((response) => response.json())
			.then((responseJson) => {
				const playlistID = responseJson.id
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
					headers: headers,
					method: 'POST',
					body: JSON.stringify({ uris: trackUris }),
				})
			})
	},
}

export default Spotify
