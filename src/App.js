import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Title from './components/Title';
import PizzaCalculator from './components/PizzaCalculator';
import './style.css';
import{useDispatch, useSelector} from 'react-redux'


export default function App() {
  const dispatch = useDispatch()
  const username = useSelector(state =>state.username)
  const usernamehandler = (e) => {
    const usernameAction = {type: 'CHANGE_USERNAME', payload: e.target.value,}
    dispatch(usernameAction)
  };
  return (
    <div>
      <Navigation />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input value={username} onChange={usernamehandler } />
        </div>
        <Title/> 
        <PizzaCalculator  />
      </main>
    </div>
  );
}
