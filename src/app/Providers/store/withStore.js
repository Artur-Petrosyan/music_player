/**
 * Import React and necessary dependencies.
 * @module React
 * @module {Provider} Provider
 * @module {configureStore} configureStore
 * @module {rootReducer} rootReducer
 */

/**
 * Create a Redux store with the rootReducer.
 * @function configureStore
 * @param {object} param0 - An object containing the reducer function.
 * @returns {object} - The Redux store.
 */

/**
 * Wrap a component with the Provider component from react-redux.
 * @function withStore
 * @param {React.Component} component - The component to be wrapped.
 * @returns {React.Component} - The wrapped component.
 */

import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
    reducer : rootReducer ,
})

export const withStore = ( component ) => <Provider store={store}>{component}</Provider>