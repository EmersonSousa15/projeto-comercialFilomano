import {createBrowserRouter} from 'react-router-dom';
import { Home } from '../pages/Home/Home';

export const route = createBrowserRouter([
  {
    path: "/",
    Element: <Home />,
  },
]);
