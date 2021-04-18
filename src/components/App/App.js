import './App.css'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'
import Footer from '../Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { Component } from 'react'

// toast('Track already in playlist', {
// 	className: 'black-background',
// 	bodyClassName: 'grow-font-size',
// 	progressClassName: 'fancy-progress-bar',
// 	autoClose: 50000,
// 	hideProgressBar: false,
// 	closeOnClick: true,
// 	pauseOnHover: true,
// 	draggable: true,
// 	progress: undefined,
// })

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
		if (!mySearch) {
			return
		}
		Spotify.search(mySearch).then((searchResults) => this.setState({ searchResults: searchResults }))
	}

	savePlaylist() {
		const trackUris = this.state.playlistTracks.map((track) => track.uri)
		Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
			this.setState({ playlistName: 'New PlayList', playlistTracks: [] })
		})
	}

	addTrack(track) {
		if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
			return
		}
		// make a copy of state searchResult
		const copySearchResult = this.state.searchResults

		// collect the index to remove depending on track.id
		let removeIndex = copySearchResult
			.map(function (item) {
				return item.id
			})
			.indexOf(track.id)

		// remove the object from the array
		copySearchResult.splice(removeIndex, 1)
		this.setState({ searchResults: copySearchResult })

		this.setState({
			playlistTracks: [...this.state.playlistTracks, track],
		})
	}

	removeTrack(track) {
		let copyTracks = this.state.playlistTracks
		let removeTrack = copyTracks.filter((myTrack) => myTrack.id === track.id)
		let keepTracks = copyTracks.filter((myTrack) => myTrack.id !== track.id)

		// make a copy of state searchResult
		const copySearchResult = this.state.searchResults

		let dupplicateIndex = copySearchResult
			.map(function (item) {
				return item.id
			})
			.indexOf(track.id)

		if (dupplicateIndex === -1) {
			// add the object at the beginning of the array
			copySearchResult.unshift(removeTrack[0])
		}

		this.setState({ playlistTracks: keepTracks, searchResults: copySearchResult })
	}

	updatePlaylistName(newPlaylistName) {
		this.setState({ playlistName: newPlaylistName })
	}

	render() {
		return (
			<div>
				<div className='App'>
					<Header />
					<Jumbotron />
					<SearchBar onSearch={this.search} />
					<div className='App-playlist'>
						<SearchResults
							SearchResults={this.state.searchResults}
							playlistTracks={this.state.playlistTracks}
							onAdd={this.addTrack}
							onRemove={this.removeTrack}
						/>
						<Playlist
							playlistName={this.state.playlistName}
							onRemove={this.removeTrack}
							playlistTracks={this.state.playlistTracks}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
				<Footer />
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<ToastContainer />
			</div>
		)
	}
}
