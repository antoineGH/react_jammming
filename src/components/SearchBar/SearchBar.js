import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.search = this.search.bind(this)
		this.handleTermChange = this.handleTermChange.bind(this)
		this.state = { term: '' }
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.search()
		}
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
				<input onChange={this.handleTermChange} onKeyUp={this.handleKeyPress.bind(this)} placeholder='Search...' />
				<button className='SearchButton' onClick={this.search}>
					{<i className='fas fa-search'></i>}
				</button>
			</div>
		)
	}
}
