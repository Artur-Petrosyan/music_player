/**
 * A custom root reducer function that combines multiple reducers.
 *
 * @param {object} state - The current state of the Redux store.
 * @param {object} action - An action object that describes a change in the state.
 * @returns {object} The new state of the Redux store.
 *
 * @example
 * import { combineReducers } from '@reduxjs/toolkit';
 * import { rootReducer } from './reducers';
 *
 * const store = configureStore({
 *   reducer: rootReducer,
 * });
 */
import { combineReducers } from "@reduxjs/toolkit";
import songReducer from './songSlice'

export const rootReducer = combineReducers({
    songs : songReducer
});