import "./App.css";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin"
function App() {
  
  return <>
  <Routes>
  {/* <Route path="/" exact> </></Route> */}
  <Route path="/" element={<LoginPage/>}/> 
  <Route path="/admin" element={<Admin/>}/> 
  </Routes>
  </>
}

export default App;
