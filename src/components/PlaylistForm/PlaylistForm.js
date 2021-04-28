import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, FormGroup, InputGroup } from 'react-bootstrap'

export default function PlaylistForm(props) {
	const { playlistTracks, isLoadingPlaylist } = props
	const regexNoSpecial = /^[a-zA-Z0-9. ]*$/
	const noDefault = /^((?!Playlist Name)[\s\S])*$/

	const validationSchema = Yup.object({
		playlistTracks: Yup.array().min(
			1,
			<>
				<i className='fas fa-exclamation'></i>&nbsp;&nbsp;&nbsp;Add at least one track
			</>
		),
		playlistName: Yup.string()
			.min(
				4,
				<>
					<i className='fas fa-exclamation'></i>&nbsp;&nbsp;Playlist name too short
				</>
			)
			.max(
				25,
				<>
					<i className='fas fa-exclamation'></i>&nbsp;&nbsp;Playlist name too long
				</>
			)
			.matches(noDefault, 'Please choose playlist name')
			.matches(
				regexNoSpecial,
				<>
					<i className='fas fa-exclamation'></i>&nbsp;&nbsp;Playlist shouldn't contain special characters
				</>
			)
			.required(
				<>
					<i className='fas fa-exclamation'></i>&nbsp;&nbsp;Playlist name required
				</>
			),
	})

	const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
		initialValues: {
			playlistName: 'Playlist Name',
			playlistTracks: playlistTracks,
		},
		validationSchema,
		onSubmit(values) {
			console.log(values)
			savePlaylist()
		},
	})

	const savePlaylist = () => {
		props.onSave(values.playlistName)
	}

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
				<div className='button_container'>
					<button disabled={isLoadingPlaylist} type='submit' className='button-design'>
						{'SAVE TO SPOTIFY'.toLowerCase()}
					</button>
				</div>
				<div className='error_container'>
					{errors.playlistName && touched.playlistName && <div className='error_field'>{errors.playlistName}</div>}
					{errors.playlistTracks && touched.playlistTracks && <div className='error_field'>{errors.playlistTracks}</div>}
				</div>
			</FormGroup>
		</Form>
	)
}
