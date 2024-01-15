import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Products from './Components/Pages/Products';
import MyProducts from './Components/Pages/MyProducts';
import Cart from './Components/Pages/Cart';
import Orders from './Components/Pages/Orders';
import Nopage from './Components/Pages/NoPage';
import NavBarCustomer from './Components/Util/NavBarCustomer';
import ProductPage from './Components/Pages/ProductPage';
import NewProductForm from './Components/Pages/NewProductForm';
import NavBarSeller from './Components/Util/NavBarSeller';
import { CartProvider } from './Components/Util/CartContext';
import { AuthRoute } from './Components/Util/AuthRoute';
import { useEffect, useState } from 'react';  
import { isTokenExpired, handleLogout } from './Components/Util/AuthHelper';
import './App.css';

function App() {
  /** The first time you load any page you dont have to check the token 
   * it must be false or it will cause an infinite loop each time you try 
   * to load a page.
   * wasted 2hours to find the cause
   * :( **/
  const [tokenExpired, setTokenExpired] = useState(false);

  /**
   * Check if token is expired every 10 seconds.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if(!(window.location.pathname === "/loginsignup" || window.location.pathname === "/")){
        setTokenExpired(isTokenExpired());
      }
    }, 10000); 
    return () => clearInterval(interval); 
  }, []);

  /** If token is expired, logout. **/
  useEffect(() => {
    if(!(window.location.pathname === "/loginsignup" || window.location.pathname === "/")) {
      if ( tokenExpired ) {
        handleLogout();
      }
    }
  }, [tokenExpired]);
  
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
                <Route path="/myproducts/new" element={<> <NavBarSeller/> <NewProductForm /> </>} />
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
  OK 2)Add all the fields warning before sending log in request. 
  OK 3)Add an alert if you enter wrong credentials.
  5)Recheck keycloak cuase I deleted the volume because I am impatient
  6)SOS: Make appropriate sellers with nice names.
  OK 7)Add alert when login/register fails
  #######8)Dynamic base url to the OrderHelper.js and ProductHelper.js
  OK 9)Add alert when an order/product is created.
  OK 10)Empty cart after order and navigate to order pages.
  OK 11)Add login protection to ProductHelper and OrderHelper
  12)Make Forgot your password do something.
  ######13)CANT BE DONE EASILLY REMOVED THE LINK FROM CART Add redirects when accessign products via id
  ######14)SAME AS ABOVEBe able to check prods through the orders page. (Done with the help of the above)
 */