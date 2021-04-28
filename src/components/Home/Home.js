import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

export default class Home extends Component {
	render() {
		const {
			hasError,
			isLoading,
			searchResults,
			playlistTracks,
			isLoadingPlaylist,
			onSearch,
			onTryAgain,
			onAdd,
			onRemove,
			onSave,
			onNameChange,
		} = this.props
		return (
			<>
				<SearchBar onSearch={onSearch} />
				<div className='App-playlist'>
					<SearchResults
						hasError={hasError}
						isLoading={isLoading}
						SearchResults={searchResults}
						playlistTracks={playlistTracks}
						onAdd={onAdd}
						onRemove={onRemove}
						onTryAgain={onTryAgain}
					/>
					<Playlist
						onRemove={onRemove}
						playlistTracks={playlistTracks}
						onNameChange={onNameChange}
						onSave={onSave}
						isLoadingPlaylist={isLoadingPlaylist}
					/>
				</div>
			</>
		)
	}
}
