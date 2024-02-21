import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import { Nav } from 'react-bootstrap';
import Footer from './Pages/Shared/Footer';
// import Product from './Pages/Home/Product/Product';
// import Products from './Pages/Home/Product/Products';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
// import Nav from './Pages/Shared/Header';
import Header from './Pages/Shared/Header';
import SingleProduct from './Pages/Home/Product/SingleProduct';
import Notfound from './Pages/Shared/Notfound';

function App() {
  return (
    <div className="">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<SingleProduct></SingleProduct>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/blogs' element={<Blogs></Blogs>}></Route> */}
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
