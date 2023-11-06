
import { createContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const UserContext = createContext()

function App() {
  const [userState, setUserState] = useState({})

  // const user = {
  //  userName: 'johndoe@gmail.com',
  //  accountType: 'admin', 
  //  _id:"979079232",
  // }

console.log('userState in app ->',userState)

  return (
    <BrowserRouter>
    <UserContext.Provider  value = {{ userState, setUserState }}>
  <Header />
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path ='/Login' element={<Login />} />
      <Route path ='/Signup' element={<Signup />} />
    </Routes>
  
  <Footer />
  </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
