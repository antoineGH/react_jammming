import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, FormGroup, InputGroup } from 'react-bootstrap'

export default function PlaylistForm(props) {
	const { playlistTracks, isLoadingPlaylist } = props
	const regexNoSpecial = /^[a-zA-Z. ]*$/
	const noDefault = /^((?!Playlist Name)[\s\S])*$/
	const validationSchema = Yup.object({
		playlistTracks: Yup.array().min(1, 'Please add at least one track'),
		playlistName: Yup.string()
			.min(4, 'Playlist name too short')
			.max(25, 'Playlist name too long')
			.matches(noDefault, 'Please choose a playlist name')
			.matches(regexNoSpecial, "Playlist shoudln't contain special characters")
			.required('Playlist name required'),
	})

	const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
		initialValues: {
			playlistName: 'Playlist Name',
			playlistTracks: playlistTracks,
		},
		validationSchema,
		onSubmit(values) {
			console.log(values)
		},
	})

	return (
		<Form role='form' onSubmit={handleSubmit}>
			<FormGroup className='searchContainer'>
				<InputGroup className='inputGroup'>
					<InputGroup.Prepend>
						<InputGroup.Text>
							<i className='far fa-edit'></i>
						</InputGroup.Text>
					</InputGroup.Prepend>
					<Form.Control id='playlistName' name='playlistName' type='text' onBlur={handleBlur} onChange={handleChange} value={values.playlistName} />
				</InputGroup>
				<div className='error_container'>
					{errors.playlistName && touched.playlistName && <div className='error_field'>{errors.playlistName}</div>}
					{errors.playlistTracks && touched.playlistTracks && <div className='error_field'>{errors.playlistTracks}</div>}
				</div>
				<div className='button_container'>
					<button disabled={isLoadingPlaylist} type='submit' className='button-design'>
						{'SAVE TO SPOTIFY'.toLowerCase()}
					</button>
				</div>
			</FormGroup>
		</Form>
	)
}
