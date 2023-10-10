import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout'
import AboutJerome from "./PageComponents/AboutJerome";
import UserFeedBack from "./PageComponents/UserFeedBack";


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/HumanTypeScript" element={<Layout />}>
        <Route path="Jerome" element={<AboutJerome/>}/>
        <Route path="feedback" element={<UserFeedBack/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
