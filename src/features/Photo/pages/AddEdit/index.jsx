import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlide';
import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (values) => {
		return new Promise((resolve) => {
			console.log('Form submit: ', values);

			setTimeout(() => {
				const action = addPhoto(values);
				console.log({ action });
				dispatch(action);

				history.push('/photos');
				resolve(true);
			}, 2000);
		});
	};

	return (
		<div className="photo-edit">
			<Banner title="Pick your amazing photo 😎" />
			<div className="photo-edit__form">
				<PhotoForm onSubmit={(values) => handleSubmit(values)} />
			</div>
		</div>
	);
}

export default AddEditPage;
