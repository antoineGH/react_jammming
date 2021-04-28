import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'
import Spotify from '../../util/Spotify'
import Footer from '../Footer/Footer'
import MyPlaylists from '../MyPlaylists/MyPlaylists'
import Home from '../Home/Home'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mySearch: '',
			searchResults: [],
			playlistName: 'myPlayListName',
			playlistTracks: [],
			hasError: false,
			isLoading: false,
			isLoadingPlaylist: false,
			currentPlaylist: [],
		}
		this.addTrack = this.addTrack.bind(this)
		this.removeTrack = this.removeTrack.bind(this)
		this.updatePlaylistName = this.updatePlaylistName.bind(this)
		this.savePlaylist = this.savePlaylist.bind(this)
		this.search = this.search.bind(this)
		this.tryAgainSearch = this.tryAgainSearch.bind(this)
	}

	componentDidMount() {
		window.addEventListener('load', () => {
			Spotify.getAccessToken()
		})
		// this.getPlaylist()
	}

	getPlaylist() {
		Spotify.getPlaylist().then((responseJson) => {
			console.log(responseJson)
		})
	}

	search(mySearch) {
		if (!mySearch) {
			return
		}
		this.setState({ mySearch: mySearch, hasError: false, isLoading: true })
		Spotify.search(mySearch)
			.then((searchResults) => this.setState({ searchResults: searchResults, isLoading: false, hasError: false }))
			.catch((error) => {
				console.log(error)
				this.setState({ hasError: true, isLoading: false })
			})
	}

	getPlaylistURL(response) {
		if (!response || response.hasOwnProperty('url')) {
			return false
		}
		let playlistURL = response.url.split('/')
		return playlistURL[7]
	}

	savePlaylist() {
		this.setState({ isLoadingPlaylist: true })
		const trackUris = this.state.playlistTracks.map((track) => track.uri)
		Spotify.savePlaylist(this.state.playlistName, trackUris)
			.then((response) => {
				const playlistURL = this.getPlaylistURL(response)
				const message = (
					<>
						<a target='blank' href={`https://open.spotify.com/playlist/${playlistURL}`} className='linkToast'>
							{this.state.playlistName}
						</a>
						<p>added to Spotify.</p>
					</>
				)
				toast(message, {
					className: 'black-background',
					bodyClassName: 'grow-font-size',
					progressClassName: 'fancy-progress-bar',
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
				this.setState({ playlistName: 'New PlayList', playlistTracks: [] })
				setTimeout(() => {
					this.setState({ isLoadingPlaylist: false })
				}, 500)
			})
			.catch((error) => {
				console.log(error)
				this.setState({ isLoadingPlaylist: false })
				toast('Error Adding the Playlist', {
					className: 'black-background',
					bodyClassName: 'grow-font-size',
					progressClassName: 'fancy-progress-bar',
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
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

	tryAgainSearch() {
		this.setState({ hasError: false, isLoading: true })
		this.search(this.state.mySearch)
	}

	render() {
		const { hasError, isLoading, searchResults, playlistTracks, playlistName, isLoadingPlaylist } = this.state
		return (
			<div>
				<div className='App'>
					<Router>
						<Header />
						<Jumbotron />
						<Switch>
							<Route
								path='/'
								exact
								component={() => (
									<Home
										onSearch={this.search}
										hasError={hasError}
										isLoading={isLoading}
										searchResults={searchResults}
										playlistTracks={playlistTracks}
										onAdd={this.addTrack}
										onRemove={this.removeTrack}
										onTryAgain={this.tryAgainSearch}
										playlistName={playlistName}
										onNameChange={this.updatePlaylistName}
										onSave={this.savePlaylist}
										isLoadingPlaylist={isLoadingPlaylist}
									/>
								)}
							/>
							<Route path='/playlists' exact component={MyPlaylists} />
						</Switch>
						<Footer />
					</Router>
				</div>
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
