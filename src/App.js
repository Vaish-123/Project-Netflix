import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import RowPoster from './Components/RowPoster/RowPoster'
import './urls'
import { action, originals, trending } from './urls'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPoster url={originals} title='NETFLIX ORIGINALS' />
      <RowPoster url={action} title='Action' small />
      <RowPoster url={trending} title='Trending' small />
    </div>
  )
}

export default App
