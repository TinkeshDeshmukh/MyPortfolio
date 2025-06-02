import {  HashRouter,Routes, Route  } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
      
        <Route index element ={<Home/>}/>
        <Route path="*" element={<NotFound />} />
        

      </Routes>
      <HashRouter/>
    </div>  
  )
}

export default App
