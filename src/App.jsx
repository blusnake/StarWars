
import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Characters from './pages/Characters'
import Planets from './pages/Planets'   
import Starships from './pages/Starships'
import Films from './pages/Films/Films'
import './App.css'

const App = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path='/'></Route>
                    <Route path='/characters' element={<Characters />}>
                        <Route path='/characters/:num' element={<Characters />} />
                    </Route>
                    <Route path='/planets' element={<Planets />}>
                        <Route path='/planets/:num' element={<Planets />} />
                    </Route>
                    <Route path='/starships' element={<Starships />}>
                        <Route path='/starships/:num' element={<Starships />} />
                    </Route>
                    <Route path='/films' element={<Films/>}>
                        <Route path='/films/:num' element={<Films/>}/>
                    </Route>
                </Routes>
                
            </div>

        </div>
    )
}

export default App