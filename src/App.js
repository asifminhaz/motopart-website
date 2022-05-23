
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RequireAuth from './components/Login/RequireAuth';
import Purchase from './components/Purchase/Purchase';
import Navbar from './components/Shared/Navbar';
import ToolDetail from './components/ToolDetail/ToolDetail';


function App() {
  return (
    <div>
 <Navbar></Navbar>
 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/home' element={<Home></Home>}></Route>
   <Route path='/purchase' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
   <Route path='/blogs' element={<Blogs></Blogs>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/tool/:toolId' element={
     <RequireAuth>
   <ToolDetail></ToolDetail></RequireAuth>}></Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/contact' element={<Contact></Contact>}></Route>
 </Routes>
    </div>
  );
}

export default App;
