import React, { Component } from 'react'
import './TrackList.css'
import Track from '../Track/Track'

export default class TrackList extends Component {
	render() {
		if (this.props.tracks) {
			return this.props.tracks.map((track) => {
				if (!this.props.isPlaylist) {
					this.props.playlistTracks.forEach((playlistTrack) => {
						if (playlistTrack.id === track.id) {
							return <h1>already</h1>
						}
					})
				}
				return (
					<Track
						key={track.id}
						track={track}
						onAdd={this.props.onAdd}
						onRemove={this.props.onRemove}
						isRemoval={this.props.isRemoval}
						isPlaylist={this.props.isPlaylist}
					/>
				)
			})
		} else {
			return <div></div>
		}
	}
}
