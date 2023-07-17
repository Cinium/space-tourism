import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./screenSizeSlice";

export default configureStore({
	reducer: {
		screenSize: screenSizeReducer
	}
})