import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { Provider } from 'react-redux';
import store from './app/store';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>

    </div>
  );
}

export default App;
