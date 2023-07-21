import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  RouterProvider,
} from "react-router-dom";
import { routes } from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={routes} />
);


