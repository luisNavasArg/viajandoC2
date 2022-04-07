import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Paquetes from './components/Paquetes'
import Hoteles from './components/Hoteles'
import axios from 'axios'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hoteles:[],
      paquetes:[]
    }
  }
  async request(){
    await axios('https://pruebagcd.herokuapp.com/paquetes')
    .then(data=>this.setState({paquetes:data.data}))
  }
  componentDidMount(){
    this.request();
  }
  render() {
    return (
      <div className="row">
        <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/hoteles' element={<Hoteles />}/>
          <Route path='/paquetes' element={<Paquetes data={this.state.paquetes} />}/>
        </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
