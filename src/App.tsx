import { createBrowserRouter } from "react-router-dom";
import {Home} from './pages/home'
import {Tabble} from './pages/tablle'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/tabela',
    element: <Tabble/>
  }
])

export {router}