import React, { Component } from 'react'
import './Track.css'

export default class Track extends Component {
	renderAction(isRemoval) {
		return <button className='Track-action'>{isRemoval ? '-' : '+'}</button>
	}
	render() {
		const { name, artist, album } = this.props.track
		return (
			<div className='Track'>
				<div className='Track-information'>
					<h3>{name}</h3>
					<p>
						{artist} | {album}
					</p>
				</div>
				{this.renderAction()}
			</div>
		)
	}
}
