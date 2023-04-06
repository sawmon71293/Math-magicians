import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuote';
import Home from './components/Home';
import Rootlayout from './layouts/Rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}
    >
      <Route
        index
        element={<Home />}
      />

      <Route
        path="quote"
        element={<DisplayQuote />}
      />
      <Route
        path="calculator"
        element={<Calculator />}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
