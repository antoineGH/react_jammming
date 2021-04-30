import React, { useEffect, useState } from 'react'
import TrackList from '../TrackList/TrackList'
import PlaylistForm from '../PlaylistForm/PlaylistForm'
import './Playlist.css'
import BarLoader from 'react-spinners/BarLoader'

export default function Playlist(props) {
	const [namePlaylist, setNamePlaylist] = useState('New Playlist Name')
	const [isLoading, setIsLoading] = useState(true)
	const { playlistTracks, isLoadingPlaylist, onRemove, onSave } = props

	useEffect(() => {
		setIsLoading(true)
		const returnStorage = localStorage.getItem('playlistName')
		if (returnStorage) {
			setNamePlaylist(returnStorage)
		}
		setIsLoading(false)
		return () => {}
	}, [])

	if (isLoading) {
		return (
			<>
				<div className='Playlist'>
					<TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} isPlaylist={true} />
				</div>
			</>
		)
	}

	return (
		<>
			<div className='Playlist'>
				<PlaylistForm namePlaylist={namePlaylist} playlistTracks={playlistTracks} isLoadingPlaylist={isLoadingPlaylist} onSave={onSave} />
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
