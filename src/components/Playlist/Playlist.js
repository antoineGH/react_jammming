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
				<div className='searchContainer'>
					<i className='far fa-edit'></i>
					<input onChange={(e) => this.handleNameChange(e)} defaultValue={'New Playlist'} />
				</div>
				<TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} isPlaylist={true} />
				<div className='button_container'>
					<button className='button-design' onClick={this.props.onSave}>
						{'SAVE TO SPOTIFY'.toLowerCase()}
					</button>
				</div>
			</div>
		)
	}
}
