import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.search = this.search.bind(this)
		this.handleTermChange = this.handleTermChange.bind(this)
		this.state = { term: '' }
	}

	search() {
		this.props.onSearch(this.state.term)
	}

	handleTermChange(e) {
		this.setState({ term: e.target.value })
	}

	render() {
		return (
			<div className='SearchBar'>
				<input onChange={this.handleTermChange} placeholder='Enter A Song, Album, or Artist' />
				<div className='container_btn'>
					<button className='button-design' onClick={this.search}>
						{'SEARCH'.toLowerCase()}
					</button>
				</div>
			</div>
		)
	}
}
