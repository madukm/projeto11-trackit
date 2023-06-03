import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginPage setToken={setToken}/>} />
        <Route path="/cadastro" element={<SignUpPage />} />
    </Routes>
    </BrowserRouter>
  )
}

