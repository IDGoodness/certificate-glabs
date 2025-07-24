import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import One from './Pages/Home/One';
import Course1 from './Pages/Cert/Course1';
import GenomacLabs from './Pages/Home/GenomacLabs';
import Course2 from './Pages/Cert/Course2';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/course1" element={<Course1 />} />
          <Route path="/course2" element={<Course2 header="Certificate of Completion" courseTitle="," date="21st - 24th July 2025" />} />
          <Route path="/genomac-labs" element={<GenomacLabs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
