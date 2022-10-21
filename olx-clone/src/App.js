import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header, PorductDetails } from './Components';
import Home from './Pages/Home';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/porductDetails/:id" element={<PorductDetails />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
