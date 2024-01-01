import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Products from './Components/Pages/Products';
import MyProducts from './Components/Pages/MyProducts';
import Cart from './Components/Pages/Cart';
import Orders from './Components/Pages/Orders';
import Nopage from './Components/Pages/NoPage';
import NavBar from './Components/Util/NavBar';
import ProductPage from './Components/Pages/ProductPage';
import { CartProvider } from './Components/Util/CartContext';
import { useCart } from './Components/Util/CartContext'
import { useEffect } from 'react';
function App() { 

  const CartDebugger = () => {
    const { cart } = useCart();
  
    useEffect(() => {
      console.log('Cart state:', cart);
    }, [cart]);
  
    return null; // This component doesn't render anything
  };

  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
                <Route path="/cart" element={<><NavBar/> <Cart /> </>} />
                <Route path="/myproducts" element={<><NavBar/> <MyProducts /> </>} />
                <Route path="/products" element={<><NavBar/> <Products /></>} />
                <Route path="/orders" element={<><NavBar/> <Orders /></>} />
                <Route path="/product/:prodId" element={<><NavBar/> <ProductPage/></>} />
                <Route path="*" element={<Nopage />} />
                <Route index element={<LoginSignUp />} />
                <Route path="/loginSignup" element={<LoginSignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
        <CartDebugger />
      </div>
    </CartProvider>
  );
}

export default App;
