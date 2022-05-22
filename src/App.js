
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Purchase from './components/Purchase/Purchase';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
 <Navbar></Navbar>
 <Routes>
   <Route path='' element={<Home></Home>}></Route>
   <Route path='/about' element={<Home></Home>}></Route>
   <Route path='/purchase' element={<Purchase></Purchase>}></Route>
   <Route path='/blogs' element={<Blogs></Blogs>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/contact' element={<Contact></Contact>}></Route>
 </Routes>
    </div>
  );
}

export default App;
