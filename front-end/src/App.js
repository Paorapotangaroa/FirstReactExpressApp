import './App.css';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Entertainers from './pages/Entertainers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="entertainers" element={<Entertainers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
