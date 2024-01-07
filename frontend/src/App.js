import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Products from './Components/Pages/Products';
import MyProducts from './Components/Pages/MyProducts';
import Cart from './Components/Pages/Cart';
import Orders from './Components/Pages/Orders';
import Nopage from './Components/Pages/NoPage';
import NavBarCustomer from './Components/Util/NavBarCustomer';
import ProductPage from './Components/Pages/ProductPage';
import MyProductsNew from './Components/Pages/MyProductsNew';
import NavBarSeller from './Components/Util/NavBarSeller';
import { CartProvider } from './Components/Util/CartContext';
import { AuthRoute } from './Components/Util/AuthRoute';

function App() { 
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route element={<AuthRoute role = "customer" />}>
                <Route path="/cart" element={<> <NavBarCustomer/> <Cart/> </>}/>
                <Route path="/orders" element={<> <NavBarCustomer/> <Orders /> </>} />
                <Route path="/products" element={<> <NavBarCustomer/> <Products /> </>} />
                <Route path="/product/:prodId" element={<> <NavBarCustomer/> <ProductPage/> </>} />
              </Route> 
              <Route element={<AuthRoute role = "seller" />}>
                <Route path="/myproducts" element={<> <NavBarSeller/> <MyProducts /> </>} />
                <Route path="/myproducts/new" element={<> <NavBarSeller/> <MyProductsNew /> </>} />
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

/*TODO:
  1)Submit by pressing enter as well on loginpage 
  2)Add all the fields warning before sending log in request. 
  3)Add an alert if you enter wrong credentials.
  4)Add request the auth helper via a local server.
 */