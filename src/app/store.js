import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggles'
export const store = configureStore({
  reducer: {
    toggle: toggleReducer
  },
});
