import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className='Footer'>
				<div className='navigation-footer'>
					<p>IT Solutions</p>
					<p>Human</p>
					<p>Solutions</p>
					<p>Blog</p>
					<p>About Us</p>
					<p>Careers</p>
				</div>
				<div className='social-footer'>
					<i className='fab fa-linkedin-in fa-lg'></i>
					<i className='fab fa-facebook-f fa-lg'></i>
					<i className='fab fa-youtube fa-lg'></i>
				</div>
				<div className='signature-footer'>
					<p>2021 © JAMMMING</p>
					<p>Website by Antoine Ratat.</p>
				</div>
			</div>
		)
	}
}
