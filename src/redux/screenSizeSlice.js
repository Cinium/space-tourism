import { createSlice } from '@reduxjs/toolkit';

export const screenSizeSlice = createSlice({
	name: 'screenSize',
	initialState: {
		width: 0,
		height: 0,
		device: ''
	},
	reducers: {
		setWidth: (state, action) => {
			state.width = action.payload;
		},
		setHeight: (state, action) => {
			state.height = action.payload;
		},
		setDevice: (state, action) => {
			state.device = action.payload
		}
	},
});

export const { setHeight, setWidth, setDevice } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
