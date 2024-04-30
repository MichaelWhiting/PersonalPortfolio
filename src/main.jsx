import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import React from 'react'

import store from './redux/store.js';

// Pages & Components/CSS
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import FrontPage from './pages/FrontPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<FrontPage/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="contact" element={<Contact/>}/>
      {/* <Route path="front-page" element={<FrontPage/>}/> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
);
