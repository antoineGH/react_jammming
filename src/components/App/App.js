import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

import React, { Component } from 'react'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchResults: [],
			playlistName: 'myPlayListName',
			playlistTracks: [],
		}
		this.addTrack = this.addTrack.bind(this)
		this.removeTrack = this.removeTrack.bind(this)
		this.updatePlaylistName = this.updatePlaylistName.bind(this)
		this.savePlaylist = this.savePlaylist.bind(this)
		this.search = this.search.bind(this)
	}

	search(mySearch) {
		console.log('search')
		console.log(mySearch)
		Spotify.search(mySearch).then((searchResults) => this.setState({ searchResults: searchResults }))
	}

	savePlaylist() {
		console.log('PRESSED')
		const trackUris = this.state.playlistTracks.map((track) => track.uri)
		console.log(trackUris)
		// Spotify.savePlaylist(this.state.playlistName, trackUris).then(console.log('OK'))
		Spotify.savePlaylist(this.state.playlistName, trackUris)
		// Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
		// 	this.setState({ playlistName: 'New PlayList', playlistTracks: [] })
		// })
	}

	addTrack(track) {
		if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
			console.log('already existing')
			return
		}
		this.setState({
			playlistTracks: [...this.state.playlistTracks, track],
		})
	}

	removeTrack(track) {
		let copyTracks = this.state.playlistTracks
		let keepTracks = copyTracks.filter((trackToRemove) => trackToRemove.id !== track.id)
		this.setState({ playlistTracks: keepTracks })
	}

	updatePlaylistName(newPlaylistName) {
		this.setState({ playlistName: newPlaylistName })
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					<SearchBar onSearch={this.search} />
					<div className='App-playlist'>
						<SearchResults SearchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack} />
						<Playlist
							playlistName={this.state.playlistName}
							onRemove={this.removeTrack}
							playlistTracks={this.state.playlistTracks}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
		)
	}
}
