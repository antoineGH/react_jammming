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
			],
		}
	}
	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					<SearchBar />
					<div className='App-playlist'>
						<SearchResults SearchResults={this.state.searchResults} />
						<Playlist />
					</div>
				</div>
			</div>
		)
	}
}
