import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/HumanTypeScript" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
