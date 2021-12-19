import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import RowPoster from './Components/RowPoster/RowPoster'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPoster title='NETFLIX ORIGINALS' />
      <RowPoster title='Action' small />
    </div>
  )
}

export default App
