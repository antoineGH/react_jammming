import React, { Component } from 'react'
import './Track.css'
import AudioPreview from '../AudioPreview/AudioPreview'

export default class Track extends Component {
	constructor(props) {
		super(props)
		this.addTrack = this.addTrack.bind(this)
		this.removeTrack = this.removeTrack.bind(this)
	}

	renderAction(isRemoval) {
		if (isRemoval) {
			return (
				<button onClick={this.removeTrack} className='Track-action'>
					-
				</button>
			)
		} else {
			return (
				<button onClick={this.addTrack} className='Track-action'>
					+
				</button>
			)
		}
	}
	addTrack() {
		this.props.onAdd(this.props.track)
	}

	removeTrack() {
		this.props.onRemove(this.props.track)
	}
	render() {
		const { name, artist, album, image, preview } = this.props.track
		const { isRemoval, isPlaylist } = this.props
		return (
			<div className='Track'>
				<div className={isPlaylist ? 'Playlist-information' : 'Track-information'}>
					{!isPlaylist && (
						<>
							<img className='imgPreview' src={image} alt={name} />
							<AudioPreview preview={preview} />
						</>
					)}
					{/* {!isPlaylist && <audio controls src={preview}></audio>} */}
					<h3>{name}</h3>
					<p>
						{artist} | {album}
					</p>
				</div>
				{this.renderAction(isRemoval)}
			</div>
		)
	}
}
