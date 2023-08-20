import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import './App.css';
import MainHomepage from './components/homepage/main-homepage';
import MainAuthentication from './components/login/main-sign';
import AssistChat from './components/chat/assistive-chat';
import AdminEmailContext from './components/context/adminContext';
import AdminNameContext from './components/context/AdminNameContext';
import Products from './components/homepage/products';

function App() {

  const [emailId, setEmailId] = useState(localStorage.getItem('emailId') || null);
  const [firstName, setAdminName] = useState(localStorage.getItem('firstName') || null);

  return (
    <div className="App">
       <BrowserRouter>
       <AdminEmailContext.Provider value={{ emailId, setEmailId }}>
          <AdminNameContext.Provider value={{ firstName, setAdminName }}>
            <main>
              <Routes>
                <Route path="/dashboard" element={<MainHomepage />} />
                <Route path="/" element={<MainAuthentication />} />
                <Route path="/search-products" element={<Products />} />
                <Route path="/chat" element={<AssistChat />} />
              </Routes>
            </main>
            </AdminNameContext.Provider>
        </AdminEmailContext.Provider>
       </BrowserRouter>
    </div>
  );
}

export default App;
