import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Route >

    ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};



export default App;
