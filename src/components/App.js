import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


const App = () => (
  <div>
    <MuiThemeProvider>
      <AppBar title="TODO LIST"/>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </MuiThemeProvider>
  </div>
)

export default App