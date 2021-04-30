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
			{playlist.image && <Image image={playlist.image.url} name={playlist.name} />}
			<a className='playlistAnchor' rel='noreferrer noopener' target='_blank' href={playlist.playlistUrl}>
				<h3 className='playlistName'>{formatName(playlist.name)}</h3>
			</a>
			<p className='totalTrack'>{playlist.total} Tracks</p>
			<a className='button' rel='noreferrer noopener' target='_blank' href={playlist.playlistUrl}>
				<button className='button-design'>
					<i class='fab fa-spotify'></i> View on Spotify{' '}
				</button>
			</a>
		</div>
	)
}
