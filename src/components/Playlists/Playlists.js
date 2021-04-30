import React from 'react'
import Image from '../Image/Image'
import './Playlists.css'

const formatName = (name) => {
	if (name.length > 40) {
		return name.slice(0, 40) + '..'
	}
	return name
}

export default function Playlists(props) {
	const { playlist } = props
	console.log(playlist)
	return (
		<div className='Playlists'>
			<Image image={playlist.image.url} name={playlist.name} />
			<h3 className='playlistName'>{formatName(playlist.name)}</h3>
			<p className='totalTrack'>{playlist.total} Tracks</p>
			<a rel='noreferrer noopener' target='_blank' href={playlist.playlistUrl}>
				<button className='button-design'>View on Spotify</button>
			</a>
		</div>
	)
}
