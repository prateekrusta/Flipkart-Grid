import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainHomepage from './components/homepage/main-homepage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <main>
              <Routes>
                <Route path="/" element={<MainHomepage />} />
              </Routes>
            </main>
       </BrowserRouter>
    </div>
  );
}

export default App;