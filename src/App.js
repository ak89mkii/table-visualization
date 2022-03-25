import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Index/Index.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="main">
        <Home />
      </div>
      
    )
  }
}

export default App;
