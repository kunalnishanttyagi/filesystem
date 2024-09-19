import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Create from './components/Create'
import Detail from './components/Detail'
import Update from './components/Update'
export default function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/detail' element={<Detail></Detail>}></Route>
      <Route path='/update' element={<Update></Update>}></Route>





    </Routes>
    
    </>
  );
}
