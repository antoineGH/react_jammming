import React, { useEffect, useState } from 'react'
import Spotify from '../../util/Spotify'
import BarLoader from 'react-spinners/BarLoader'
import './MyPlaylists.css'

export default function MyPlaylists() {
	const [playlists, setPlaylists] = useState([])
	const [hasError, setHasError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const getPlaylist = () => {
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
					{hasError && <p>hasError</p>}
					{isLoading && <BarLoader color={'rgb(255 255 255 / 40%)'} height={6} width={120} size={20} />}
					{!isLoading && <></>}
				</div>
			</div>
		</>
	)

	// 	if (hasError) {
	// 		return (
	// 			<>
	// 				<p>hasError</p>
	// 			</>
	// 		)
	// 	}
	// 	if (isLoading) {
	// 		return (
	// 			<>
	// 				<BarLoader color={'rgb(255 255 255 / 40%)'} height={6} width={120} size={20} />
	// 			</>
	// 		)
	// 	} else {
	// 		return <>MyPlaylists</>
	// 	}
}
