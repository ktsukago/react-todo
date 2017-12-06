import React, {Component} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <AppBar title="TODO LIST"/>
                    <div>
                        <AddTodo/>
                        <VisibleTodoList/>
                        <Footer/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
