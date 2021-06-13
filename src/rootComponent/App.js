import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/PostsList/Home";
import DeletePost from "../components/DeletePost";
import NewPost from "../components/newPost/NewPost";
import ShowPost from "../components/ShowPost";

import "./App.css";
const App = () => {
  return (
    <Router>
      <div className='container'>
        <nav className='main-menu'>
          <li className='main-menu__item'>
            <NavLink to='/' exact>
              Posts List
            </NavLink>
          </li>
          <li className='main-menu__item'>
            <NavLink to='/posts/new'>Create New Post</NavLink>
          </li>
          <li className='main-menu__item'>
            <NavLink to='/posts/delete'>Delete Post</NavLink>
          </li>
        </nav>

        <main className='main-content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/posts/new' component={NewPost} />
            <Route path='/posts/delete' component={DeletePost} />
            <Route path='/posts/:id' component={ShowPost} />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
