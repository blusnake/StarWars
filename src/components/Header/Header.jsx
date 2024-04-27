import React from 'react'
import LinkComponent from '../LinkComponent'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div>
            <div className='Title'> 
              <LinkComponent path='/' >
                <h1>Star Wars</h1>
              </LinkComponent>
            </div>
            <div className='headerNav'>
                <LinkComponent  path='/characters'><button>Characters</button></LinkComponent>
                <LinkComponent  path='/planets'><button>Planets</button></LinkComponent>
                <LinkComponent  path='/starships'><button>Starships</button></LinkComponent>
                <LinkComponent  path='/films'><button>Movies</button></LinkComponent>
            </div>
        </div>
    </header>
  )
}

export default Header