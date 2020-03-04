import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Post from './components/Post';
import Edit from './components/Edit';
import Header from './components/Header';
import Footer from './components/Footer';
import NewPost from './components/posts/NewPost';





function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>

      <main className="p-3">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <AuthenticatedRoute exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <AuthenticatedRoute exact path="/users/:id" component={User}/>
          <AuthenticatedRoute exact path="/users/:id/edit" component={Edit}/>
          <AuthenticatedRoute exact path="/post/:id" component={Post}/>
          <AuthenticatedRoute exact path="/posts/new" component={NewPost} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
