
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import AddProducts from './components/Dashboard/AddProducts';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import Profile from './components/Dashboard/Profile';
import Review from './components/Dashboard/Review';
import User from './components/Dashboard/User';
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
   <Route path='/dashboard' element={
     <RequireAuth>
   <Dashboard></Dashboard></RequireAuth>}>
     <Route index element={<MyOrders></MyOrders>}></Route>
      <Route path='review' element={<Review></Review>}></Route>
     <Route path='profile' element={<Profile></Profile>}></Route> 
     <Route path='users' element={<User></User>}></Route> 
     <Route path='addProducts' element={<AddProducts></AddProducts>}></Route> 
   </Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/contact' element={<Contact></Contact>}></Route>
 </Routes>
    </div>
  );
}

export default App;
