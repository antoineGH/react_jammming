import React, { Component } from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'
import BarLoader from 'react-spinners/BarLoader'

export default class SearchResults extends Component {
	render() {
		const { hasError, isLoading, SearchResults, playlistTracks, onAdd, onRemoveResult, onTryAgain } = this.props

		return (
			<>
				<div className='SearchResults'>
					<h2>Results</h2>

					{isLoading && (
						<div className='loading'>
							<BarLoader color={'rgb(255 255 255 / 40%)'} height={6} width={120} size={20} />
						</div>
					)}
					{hasError ? (
						<div className='hasError'>
							<p className='errorAPI'>Jamming Service was not able to contact Spotify API</p>
							<div className='button_container'>
								<button className='button-design' onClick={onTryAgain}>
									{'TRY AGAIN'.toLowerCase()}
								</button>
							</div>
						</div>
					) : (
						<TrackList
							tracks={SearchResults}
							playlistTracks={playlistTracks}
							onAdd={onAdd}
							isRemoval={false}
							isPlaylist={false}
							onRemoveResult={onRemoveResult}
						/>
					)}
				</div>
			</>
		)
	}
}
