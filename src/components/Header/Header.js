import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jammingLogo from './img/logo_music.png'
import './Header.css'

export default class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<div className='gridHeader'>
					<img src={jammingLogo} alt='logo_jamming' />
					<p className='jammingTitle'>Jamming</p>
					<Link to='/'>Create Playlist</Link>
					<Link to='/playlists'>My Playlists</Link>
				</div>
			</div>
		)
	}
}
