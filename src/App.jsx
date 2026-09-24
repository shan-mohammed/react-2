import React from 'react'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<RootLayout/>}>
         <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element={<Users/>}/>
      <Route path='/users/:id' element ={<UserDetails/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>

        
      </Routes>
    </Router>
  )
}

export default App