import React, { useEffect, useState } from 'react'
import Spotify from '../../util/Spotify'
import BarLoader from 'react-spinners/BarLoader'
import MyPlaylistsList from '../MyPlaylistsList/MyPlaylistsList'
import './MyPlaylists.css'

export default function MyPlaylists() {
	const [playlists, setPlaylists] = useState([])
	const [hasError, setHasError] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const getPlaylist = () => {
		setHasError(false)
		setIsLoading(true)
		Spotify.getPlaylist()
			.then((responseJson) => {
				setPlaylists(responseJson)
				setIsLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setHasError(true)
				setIsLoading(false)
			})
	}

	const onTryAgain = () => {
		getPlaylist()
	}

	useEffect(() => {
		getPlaylist()
		return () => {}
	}, [])

	console.log(playlists)

	return (
		<>
			<div className='listPlaylists'>
				<h2>My Playlists</h2>
				<div className='listPlaylistsContent'>
					{hasError && (
						<div className='hasError'>
							<p className='errorAPI'>Jamming Service was not able to contact Spotify API</p>
							<div className='button_container'>
								<button className='button-design' onClick={onTryAgain}>
									{'TRY AGAIN'.toLowerCase()}
								</button>
							</div>
						</div>
					)}
					{isLoading && (
						<div className='myPlaylistsLoading'>
							<BarLoader color={'rgb(255 255 255 / 40%)'} height={6} width={120} size={20} />
						</div>
					)}
					{!isLoading && (
						<>
							<MyPlaylistsList playlists={playlists} />
						</>
					)}
				</div>
			</div>
		</>
	)
}
