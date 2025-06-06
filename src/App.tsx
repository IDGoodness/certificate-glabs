import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import One from './Pages/Home/One';
import Course1 from './Pages/Cert/Course1';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/course1" element={<Course1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
