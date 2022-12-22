import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import store from './app/store/store';
import { App } from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceInDown"
        transitionOut="bounceOutUp"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  </React.StrictMode>
);
