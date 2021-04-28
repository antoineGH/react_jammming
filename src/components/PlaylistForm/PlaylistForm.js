import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, FormGroup, InputGroup } from 'react-bootstrap'

export default function PlaylistForm(props) {
	const { playlistTracks, isLoadingPlaylist } = props
	const regexNoSpecial = /^[a-zA-Z. ]*$/

	const validationSchema = Yup.object({
		playlistName: Yup.string()
			.min(4, 'Playlist name too short')
			.max(25, 'Playlist name too long')
			.matches(regexNoSpecial, "Playlist shoudln't contain special characters")
			.required('Playlist name required'),
	})

	const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
		initialValues: {
			playlistName: 'PlaylistName',
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
				{errors.playlistName && touched.playlistName && <div className='error_field'>{errors.playlistName}</div>}
				<div className='button_container'>
					<button disabled={!playlistTracks.lenght >= 1 || isLoadingPlaylist} type='submit' className='button-design'>
						{'SAVE TO SPOTIFY'.toLowerCase()}
					</button>
				</div>
			</FormGroup>
		</Form>
	)
}
