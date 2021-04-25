import React, { useEffect, useRef } from 'react'
import './audioPreview.css'

export default function AudioPreview(props) {
	const { preview } = props
	const thisPreview = useRef()

	useEffect(() => {
		let myObserver = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						thisPreview.current.src = preview
						myObserver = myObserver.disconnect()
					}
				}),
			{ rootMargin: '0px 0px 200px 0px' }
		)
		myObserver.observe(thisPreview.current)
	}, [preview])

	return (
		<div className='audioPlayer'>
			<audio controls ref={thisPreview}>
				<source src={''} type='audio/mp3'></source>
			</audio>
		</div>
	)
}
