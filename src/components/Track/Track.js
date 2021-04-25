import React, { Component } from 'react'
import './Track.css'
import AudioPreview from '../AudioPreview/AudioPreview'
import Image from '../Image/Image'

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

	formatName(name) {
		if (name.length > 30) {
			return name.slice(0, 25) + '..'
		}
		return name
	}

	formatArtist(artist) {
		if (artist.length > 30) {
			return artist.slice(0, 15) + '..'
		}
		return artist
	}

	formatAlbum(album) {
		if (album.length > 30) {
			return album.slice(0, 10) + '..'
		}
		return album
	}

	render() {
		const { name, artist, album, image, preview } = this.props.track
		const { isRemoval, isPlaylist } = this.props
		return (
			<div className='Track'>
				<div className={isPlaylist ? 'Playlist-information' : 'Track-information'}>
					{!isPlaylist && (
						<>
							<Image image={image} name={name} />
							{preview ? <AudioPreview preview={preview} /> : <p className='previewNotAvailable'>Preview not available</p>}
						</>
					)}

					<h3>{this.formatName(name)}</h3>
					<p>
						{this.formatArtist(artist)} | {this.formatAlbum(album)}
					</p>
				</div>
				{this.renderAction(isRemoval)}
			</div>
		)
	}
}
