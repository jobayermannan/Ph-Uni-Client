import React from 'react';
import * as ReactDOM from 'react-dom/client'; // Correct import for React 18

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes'; // Assuming routes.tsx exports a router object
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Ensure the element exists before attempting to create a root.
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);