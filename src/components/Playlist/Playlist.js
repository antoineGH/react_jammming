import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'
import BarLoader from 'react-spinners/BarLoader'

export default class Playlist extends Component {
	constructor(props) {
		super(props)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.state = { myPlaylistName: 'New Playlist' }
	}
	handleNameChange(e) {
		this.props.onNameChange(e.target.value)
	}

	render() {
		const { playlistTracks, isLoadingPlaylist, onRemove, onSave, playlistName } = this.props
		return (
			<>
				<div className='Playlist'>
					<div className='searchContainer'>
						<i className='far fa-edit'></i>
						<input onChange={this.handleNameChange} value={this.state.myPlaylistName}></input>
						<div className='button_container'>
							<button disabled={!playlistTracks.length >= 1 || isLoadingPlaylist} className='button-design' onClick={onSave}>
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
