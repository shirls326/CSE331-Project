import { useState } from 'react'
import '../index.css'
import './App.css'

// game components
import Tile from '../gameComponents/Tile.jsx'


import NavBar from '../components/navBar.jsx'

function App() {

  return (
   <div className='page'>
    <NavBar />
    <div className='gamePage'>
      <div className='gameContainer'>
        <div className='Screen'>
          <Tile tileText="Cobalt" setColor={'yellow'}/>
          <Tile tileText="Azure" setColor={'yellow'}/>
          <Tile tileText="Crimson" setColor={'yellow'}/>
          <Tile tileText="Cyan" setColor={'yellow'}/>
          <Tile tileText="Penne" setColor={'cyan'}/>
          <Tile tileText="Rigatoni" setColor={'cyan'}/>
          <Tile tileText="Spagetti" setColor={'cyan'}/>
          <Tile tileText="Baugette" setColor={'cyan'}/>
          <Tile tileText="Peru" setColor={'pink'}/>
          <Tile tileText="Spain" setColor={'pink'}/>
          <Tile tileText="Brazil" setColor={'pink'}/>
          <Tile tileText="Ecuador" setColor={'pink'}/>
          <Tile tileText="Engine" setColor={'purple'} />
          <Tile tileText="Tire" setColor={'purple'} />
          <Tile tileText="Brakes" setColor={'purple'} />
          <Tile tileText="Propeller" setColor={'purple'} />          
        </div>
        
      </div>



    </div>



   </div>
  )
}

export default App
