import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/servicios' component={Services} />
        <Route path='/productos' component={Product} />
        <Route path='/crear-cuenta' component={SingUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
