import React, { Component } from 'react'
import './TrackList.css'
import Track from '../Track/Track'

export default class TrackList extends Component {
	render() {
		if (this.props.tracks) {
			return this.props.tracks.map((track) => {
				return <Track key={track.id} track={track} />
			})
		} else {
			return <div></div>
		}
	}
}
