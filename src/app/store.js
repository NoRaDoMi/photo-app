import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlide';

const rootReducer = {
	photos: photoReducer
};

const store = configureStore({
	reducer: rootReducer
});

// Behind the scene
// Auto setup: thunk vs devtool
export default store;
