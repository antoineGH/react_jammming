import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'
import BarLoader from 'react-spinners/BarLoader'

export default class Playlist extends Component {
	constructor(props) {
		super(props)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.state = { playlistName: 'New Playlist' }
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleNameChange(e) {
		this.setState({ playlistName: e.target.value })
	}

	handleSubmit() {
		this.props.onSave(this.state.playlistName)
	}

	render() {
		const { playlistTracks, isLoadingPlaylist, onRemove } = this.props
		return (
			<>
				<div className='Playlist'>
					<div className='searchContainer'>
						<i className='far fa-edit'></i>
						<input onChange={this.handleNameChange} value={this.state.playlistName}></input>
						<div className='button_container'>
							<button disabled={!playlistTracks.length >= 1 || isLoadingPlaylist} className='button-design' onClick={this.handleSubmit}>
								{'SAVE TO SPOTIFY'.toLowerCase()}
							</button>
						</div>
					</div>

					{isLoadingPlaylist && (
						<div className='loading'>
							<BarLoader color={'rgb(255 255 255 / 40%)'} height={6} width={120} size={20} />
						</div>
					)}
					<TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} isPlaylist={true} />
				</div>
			</>
		)
	}
}
