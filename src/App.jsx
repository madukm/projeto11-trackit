import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import TodayPage from "./pages/TodayPage";
import UserContext from "./userContext";
import { useState } from "react";
import TopBar from "./components/TopBar";
import HabitsPage from "./pages/HabitsPage";

export default function App() {
  const [user, setUser] = useState('');
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<SignUpPage />} />
        <Route path='/hoje' element={<TodayPage />} />
        <Route path='/habitos' element={<HabitsPage />} />
      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

