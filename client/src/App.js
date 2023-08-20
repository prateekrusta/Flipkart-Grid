import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainHomepage from './components/homepage/main-homepage';
import MainAuthentication from './components/login/main-sign';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <main>
              <Routes>
                <Route path="/" element={<MainHomepage />} />
                <Route path="/authentication" element={<MainAuthentication />} />
              </Routes>
            </main>
       </BrowserRouter>
    </div>
  );
}

export default App;
