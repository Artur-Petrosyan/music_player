import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from "./app/App";
import { withStore } from "./app/Providers/store/withStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    withStore(<App/>)
);


reportWebVitals();
