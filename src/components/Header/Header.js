import React, { Component } from 'react'
import jammingLogo from './img/logo_music.png'
import './Header.css'

export default class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<div className='gridHeader'>
					<img src={jammingLogo} alt='logo_jamming' />
					<p class='jammingTitle'>Jamming</p>
					<a class='it' href='#overview'>
						Overview
					</a>
					<a class='human' href='#charts'>
						Charts
					</a>
					<a class='industries' href='#playlists'>
						Playlists
					</a>
				</div>
			</div>
		)
	}
}
