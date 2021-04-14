import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

import React, { Component } from 'react'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchResults: [
				{ name: 'SongName', artist: 'SongArtist', album: 'SongAlbum', id: 'SongID' },
				{ name: 'SongName2', artist: 'SongArtist2', album: 'SongAlbum2', id: 'SongID2' },
				{ name: 'SongName3', artist: 'SongArtist3', album: 'SongAlbum3', id: 'SongID3' },
			],
			playlistName: 'myPlayListName',
			playlistTracks: [
				{ name: 'SongName', artist: 'SongArtist', album: 'SongAlbum', id: 'SongID' },
				{ name: 'SongName2', artist: 'SongArtist2', album: 'SongAlbum2', id: 'SongID2' },
			],
		}
		this.addTrack = this.addTrack.bind(this)
		this.removeTrack = this.removeTrack.bind(this)
		this.updatePlaylistName = this.updatePlaylistName.bind(this)
		this.savePlaylist = this.savePlaylist.bind(this)
		this.search = this.search.bind(this)
	}

	search(mySearch) {
		console.log('start search')
		console.log(mySearch)
		console.log(typeof mySearch)
	}

	savePlaylist() {
		const trackURIs = this.state.playlistTracks.map((track) => {
			// track.uri
		})
		// spotify:track:3flhtFfDekbUGiLYC6MSmG
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
