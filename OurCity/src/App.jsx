import { useState } from 'react'
 
import './App.css'
// import Navbar from './Components/ui/Navbar'
 
import RouteShow from './Components/AllRoutes/RouteShow'
// import RouteShow from './Components/AllRoutes/RouteShow'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
       {/* <Navbar/> */}
       {/* <RouteShow/> */}
       <RouteShow/>
       

        
    </>
  )
}

export default App
