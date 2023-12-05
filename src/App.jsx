import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="/" index element={<Home/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
