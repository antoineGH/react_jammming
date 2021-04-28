import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className='Footer'>
				<div className='navigation-footer'>
					<Link to='/'>Add Playlist</Link>
					<Link to='/playlists'>View Playlists</Link>
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
