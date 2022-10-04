// we are having a look at the class based components


import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = "d480e7b0d37b43bcb0ae7b1561943ba5"
    state = {
      progress:0
    }

    setProgress = (progress)=>{
      this.setState({
        progress:progress
      })
    }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
        <Routes>
      <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={12} country="in" category="general" />}></Route>
      <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={12} country="in" category="health" />}></Route>
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={12} country="in" category="entertainment" />}></Route>
      <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={12} country="in" category="business" />}></Route>
      <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={12} country="in" category="science" />}></Route>
      <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={12} country="in" category="sports" />}></Route>
      <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={12} country="in" category="technology" />}></Route>
      
    </Routes>
        </BrowserRouter>
      </div>
    )
  }
}



