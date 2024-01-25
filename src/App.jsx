import Navbar from "./Components/Navbar"
import Create from "./Components/Create"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Create />}></Route>
          <Route path="/read" element={< Read />}></Route>
          <Route path="/edit/:id" element={< Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App