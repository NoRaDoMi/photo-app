import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlide';

MainPage.propTypes = {};

function MainPage(props) {
	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();
	const history = useHistory();

	const handlePhotoRemoveClick = (photo) => {
		console.log('Remove: ', photo);
		const action = removePhoto(photo.id);
		dispatch(action);
	};

	const handlePhotoEditClick = (photo) => {
		console.log('Edit: ', photo);
		const editPhotoUrl = `photos/${photo.id}`;
		history.push(editPhotoUrl);
	};

	return (
		<div className="photo-main">
			<Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

			<Container className="text-center">
				<div className="py-5">
					<Link to="/photos/add">
						<Button outline size="xm" color="danger">
							Add new photo
						</Button>
					</Link>
				</div>

				<PhotoList
					photoList={photos}
					onPhotoEditClick={handlePhotoEditClick}
					onPhotoRemoveClick={handlePhotoRemoveClick}
				/>
			</Container>
		</div>
	);
}

export default MainPage;
