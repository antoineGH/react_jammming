import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.onNameChange = this.props.onNameChange.bind(this)
	}
	render() {
		const {
			hasError,
			isLoading,
			searchResults,
			playlistTracks,
			playlistName,
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
						playlistName={playlistName}
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
