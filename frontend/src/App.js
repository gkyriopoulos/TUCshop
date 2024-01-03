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
import { UserRoute } from './Components/Util/UserRoute';

function App() { 

  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
                  <Route element={<UserRoute role = "customer" />}>
                    <Route path="/cart" element={<> <NavBar/> <Cart /> </>}/>
                    <Route path="/orders" element={<><NavBar/> <Orders /></>} />
                    <Route path="/products" element={<><NavBar/> <Products /></>} />
                    <Route path="/product/:prodId" element={<><NavBar/> <ProductPage/></>} />
                  </Route>
                  <Route element={<UserRoute role = "seller" />}>
                    <Route path="/myproducts" element={<><NavBar/> <MyProducts /> </>} />
                  </Route>
                  <Route path="*" element={<Nopage />} />
                  <Route index element={<LoginSignUp />} />
                  <Route path="/loginsignup" element={<LoginSignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
