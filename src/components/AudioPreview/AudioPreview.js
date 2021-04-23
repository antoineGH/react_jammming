import React, { Component } from 'react'
import './audioPreview.css'

export default class AudioPreview extends Component {
	render() {
		const { preview } = this.props
		return (
			<div className='audioPlayer'>
				<audio controls>
					<source src={preview} type='audio/mp3'></source>
				</audio>
			</div>
		)
	}
}
