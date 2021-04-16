import React, { Component } from 'react'
import jammingLogo from './img/logo_music.png'
import './Header.css'

export default class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<div className='gridHeader'>
					<img src={jammingLogo} alt='logo_jamming' />
					<p className='jammingTitle'>Jamming</p>
					<a className='overview' href='#overview'>
						Overview
					</a>
					<a className='charts' href='#charts'>
						Charts
					</a>
					<a className='playlists' href='#playlists'>
						Playlists
					</a>
				</div>
			</div>
		)
	}
}
