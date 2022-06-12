
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/Blogs/NotFound';
import Contact from './components/Contact/Contact';
import AddProducts from './components/Dashboard/AddProducts';
import Dashboard from './components/Dashboard/Dashboard';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import ManageProduct from './components/Dashboard/ManageProduct';
import MyOrders from './components/Dashboard/MyOrders';
import Payment from './components/Dashboard/Payment';
import Profile from './components/Dashboard/Profile';
import Review from './components/Dashboard/Review';
import User from './components/Dashboard/User';
import Home from './components/Home/Home';
import MyPortfolio from './components/Home/MyPortfolio';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RequireAuth from './components/Login/RequireAuth';
import Purchase from './components/Purchase/Purchase';
import Footer from './components/Shared/Footer';
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
     <Route index element={<Profile></Profile>}></Route>
     <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
      <Route path='review' element={<Review></Review>}></Route>
    
     <Route path='users' element={<User></User>}></Route> 
     <Route path='addProducts' element={<AddProducts></AddProducts>}></Route> 
     <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route> 
     <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route> 
     <Route path='payment/:id' element={<Payment></Payment>}></Route> 
   </Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/contact' element={<Contact></Contact>}></Route>
   {/* <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route> */}
   <Route path='*' element={<NotFound></NotFound>}></Route>
 </Routes>
 <Footer></Footer>
    </div>
  );
}

export default App;
