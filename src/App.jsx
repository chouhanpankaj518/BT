import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home'
import NewArrivals from './Pages/NewArrivals'
import Trending from './Pages/Trending'
import Customized from './Pages/Customized'
import Upperwear from './Pages/upperwear/Upperwear'
import Bottomwear from './Pages/Bottomwear'
import Seasonals from './Pages/Seasonals'
import Tshirt from './Pages/upperwear/Tshirt'
import Shirt from './Pages/upperwear/Shirt'
import Hoodie from './Pages/upperwear/Hoodie'
import Sweatshirt from './Pages/upperwear/Sweatshirt'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Addtocard from './Pages/Addtocard'




export default function App() {
  const [showcard , setshowcard] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [count, setcount]=useState(0)
  
  console.log("cart add",cart)
  const addToCart = (product) => {
    setcount(count+1)
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
      
    });
  };
  console.log(count)
  
  
  
  
  return (
    <div>
      <BrowserRouter>
      
      <Navbar setModalIsOpen={setModalIsOpen} count={count}/>
      <Routes>
       
        <Route path='/BT/' element={<Home setshowcard={setshowcard} setModalIsOpen={setModalIsOpen}/>}/>
        <Route path='/new-arrivals' element={<NewArrivals 
        // setaddcount={setaddcount}
        addToCart={addToCart} 
        />}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path="/customized" element={<Customized  showcard={showcard}/>}/>
        <Route path='/bottom-wear' element={<Bottomwear/>}/>
        <Route path='/seasonals' element={<Seasonals/>}/>
        <Route path='/login' element={<Login
         modalIsOpen={modalIsOpen} 
        setModalIsOpen={setModalIsOpen}
        setIsSignUpOpen={setIsSignUpOpen}
        />}/>
        <Route path='/SignUp' element={<SignUp
        setModalIsOpen={setModalIsOpen}
        isSignUpOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
        />}/>
       
        
          {/* Nested Routes for Upper Wear */}
          <Route path='/upper-wear' element={<Upperwear />}/>
          <Route path='/Tshirt' element={<Tshirt/>}/>
          <Route path='/Shirt' element={<Shirt/>}/>
          <Route path='/Hoodie' element={<Hoodie/>}/>
          <Route path='/Sweatshirt' element={<Sweatshirt />}/>
          <Route path='/cart' element={<Addtocard
          cart={cart}
          />}/>
          
    
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  )
}
