import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ChatList from 'pages/ChatList'
import Login from 'pages/Login'
import NewContact from 'pages/NewContact'
import Profile from 'pages/Profile'
import Register from 'pages/Register'
import NotFound from 'pages/NotFound'

function Router(props) {
  return (
    <Switch>
      <Route path="/" exact component={() => <ChatList {...props} />} />
      <Route path="/login" component={() => <Login {...props} />} />
      <Route path="/new-contact" component={() => <NewContact {...props} />} />
      <Route path="/profile" component={() => <Profile {...props} />} />
      <Route path="/register" component={() => <Register {...props} />} />
      <Route path="/*" component={() => <NotFound {...props} />} />
    </Switch>
  )
}

export default Router
