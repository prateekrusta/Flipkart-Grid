import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainHomepage from './components/homepage/main-homepage';
import MainAuthentication from './components/login/main-sign';
import Chat from './components/chat/chat';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <main>
              <Routes>
                <Route path="/dashboard" element={<MainHomepage />} />
                <Route path="/" element={<MainAuthentication />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </main>
       </BrowserRouter>
    </div>
  );
}

export default App;
