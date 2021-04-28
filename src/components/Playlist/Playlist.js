import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import PlaylistForm from '../PlaylistForm/PlaylistForm'
import './Playlist.css'
import BarLoader from 'react-spinners/BarLoader'

export default class Playlist extends Component {
	constructor(props) {
		super(props)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.state = { playlistName: 'New Playlist' }
	}
	handleNameChange(e) {
		this.setState({ playlistName: e.target.value })
	}

	render() {
		const { playlistTracks, isLoadingPlaylist, onRemove, onSave } = this.props
		return (
			<>
				<div className='Playlist'>
					<PlaylistForm playlistTracks={playlistTracks} isLoadingPlaylist={isLoadingPlaylist} onSave={onSave} />
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
