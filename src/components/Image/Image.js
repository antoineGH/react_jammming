import React, { useEffect, useRef } from 'react'
import grey from './grey.jpg'

export default function Image(props) {
	const { image, name } = props
	const thisImage = useRef()

	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						thisImage.current.src = image
						observer = observer.disconnect()
					}
				}),
			{ rootMargin: '0px 0px 200px 0px' }
		)
		observer.observe(thisImage.current)
	}, [image])

	return (
		<>
			<img className='imgPreview' ref={thisImage} alt={name} src={grey} />
		</>
	)
}
