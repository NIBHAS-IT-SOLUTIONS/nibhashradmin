
import './App.css';
import Addvacancy from './admincomp/Addvacancy/Addvacancy';
import Allempheader from './admincomp/Allempheader';
import Allemployers from './admincomp/Allemployers';
import Alljobs from './admincomp/Alljobs';
import Applications from './admincomp/Applications';
import Footer from './admincomp/Footer';
import Header from './admincomp/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewvacancy from './admincomp/viewvacancy/Viewvacancy';
import DataTable from 'datatables.net-dt';
function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /> <Alljobs /> <Footer /></>} />

          <Route path='appliedjobs' element={<><Allempheader /> <Applications /> <Footer /></>} />
          
          <Route path='addvacancy' element={<><Allempheader /> <Addvacancy/> <Footer /></>} />

          <Route path='viewvacancies' element={<><Allempheader /> <Viewvacancy/> <Footer /></>} />

          <Route path="addvacancy/:id" element={<><Allempheader /> <Addvacancy/> <Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
