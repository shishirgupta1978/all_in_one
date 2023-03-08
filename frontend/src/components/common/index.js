import React from 'react';
export * from './HomePage';
export * from './Login';
export * from './Register';
export * from './ChangePassword';
export * from './ResetPassword';
export * from './PrivateRoute';
export * from './Activate';
export * from './Contact';
export * from './NotFound';
export * from './Layout';
export * from './Title';
export * from './Spinner';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';

import {AuthRoutes} from './AuthRoutes';
import {HomePage} from './HomePage';
import {Layout} from './Layout';
import { Contact } from './Contact';
import { Activate } from './Activate'; 
import DocHomepage from '../doc/Homepage'
import { DocLayout } from '../doc/DocLayout';
import {CartPage,CheckoutPage,EshopLayout,EshopPage,Faqs,ProductItem} from '../eshop'
import {Login,Register,ResetPassword,ChangePassword,NotFound,PrivateRoute} from '.';

const CommonRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>} />
              <Route path="login" element={<Login/>} />
              <Route path="register" element={<Register/>} />
              <Route path="resetpassword" element={<ResetPassword/>} />
              <Route path="changepassword" element={<PrivateRoute><ChangePassword/></PrivateRoute>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="activate/:uid/:token" element={<Activate/>} />
              <Route path="/eshop" element={<EshopLayout/>} >
              <Route index element={<EshopPage />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          </Route>
          <Route path="/doc" element={<DocLayout/>} >
            <Route index element={<DocHomepage />} />
            <Route path="*" element={<NotFound/>} />
            </Route>     
    
            
           </Route>

      
    

    </Routes>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default CommonRoutes;
