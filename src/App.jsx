import React from 'react';
import './App.css';
import Background from './Background';
import Forground from './Forground';
// import Card from './Card';

function App() {

  return (
    <div className='w-full h-screen bg-slate-600' >
   {/* <Card/> */}
   <Background/>
   <Forground/>
    </div>
  )
}

export default App;
