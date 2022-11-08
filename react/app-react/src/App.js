import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import HomePage from './pages/home/home.page';
import LoginPage from './pages/login/login.page';
import PostDetailPage from './pages/post-detail/post-detail.page';
import PostEditPage from './pages/post-edit/post-edit.page';
import PostListPage from './pages/post-list/post-list';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link  to="/" className="navbar-brand">Post App </Link>
          <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarMenu" 
            aria-controls="navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home </Link>
            <Link to="/" className="nav-item nav-link">Posts </Link>
            </div>
          </div>
        </nav>
      <Routes>
       <Route exact path='/' element={<HomePage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/post-list'element={<PostListPage/>}/>
       <Route path='/post-detail/:id' element={<PostDetailPage/>}/>
       <Route path='/post-add'element={<PostEditPage/>}/>
       <Route path='/post-add/:id'element={<PostEditPage/>}/>
      </Routes>
     </BrowserRouter>
    );
  }
}



export default App;
