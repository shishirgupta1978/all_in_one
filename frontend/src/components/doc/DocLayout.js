import React,{useState} from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
export const DocLayout = () => {

    const [navHeight,setNavHeight]= useState(0);
  return (

    
    <div>
      <main>
      <Outlet />
      </main>
       </div>
  );
}

