import React from 'react'
import Playlists from '../Playlists/Playlists'

export default function MyPlaylistsList(props) {
	const { playlists } = props
	return playlists.map((playlist) => {
		return (
			<div className='myPlaylist'>
				<Playlists playlist={playlist} />
			</div>
		)
	})
}
