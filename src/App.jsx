import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
      
        <Route index element ={<Home/>}/>
        <Route path="*" element={<NotFound />} />
        
        {/* Add more routes here as needed */}

      </Routes>
      </BrowserRouter >
    </div>  
  )
}

export default App
