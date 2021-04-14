import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export default class Playlist extends Component {
	constructor(props) {
		super(props)
		this.handleNameChange = this.handleNameChange.bind(this)
	}
	handleNameChange(e) {
		this.props.onNameChange(e.target.value)
	}
	render() {
		return (
			<div className='Playlist'>
				<input onChange={(e) => this.handleNameChange(e)} defaultValue={'New Playlist'} />
				<TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
				<button onClick={this.props.onSave} className='Playlist-save'>
					SAVE TO SPOTIFY
				</button>
			</div>
		)
	}
}
