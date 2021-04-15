import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className='Footer'>
				<div className='navigation-footer'>
					<p>Jamming</p>
					<p>Overview</p>
					<p>Charts</p>
					<p>Playlists</p>
				</div>
				<div className='social-footer'>
					<i className='fab fa-linkedin-in fa-lg'></i>
					<i className='fab fa-facebook-f fa-lg'></i>
					<i className='fab fa-youtube fa-lg'></i>
				</div>
				<div className='signature-footer'>
					<p>2021 - JAMMING</p>
					<p>Website by Antoine Ratat</p>
				</div>
			</div>
		)
	}
}
