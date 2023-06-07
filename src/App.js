import React from 'react';
import {Navbar, Hero, Analytics, Cards, Newsletter, Footer} from "./Components";
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;
