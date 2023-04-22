import AppNavbar from './components/AppNavbar.js'
import CourseView from './components/CourseView.js'
import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login.js'
import Courses from './pages/Courses.js'
import Register from './pages/Register.js'
import UnderConstruction from './utilities/UnderConstruction.js'
import { UserProvider } from "./utilities/UserContext.js";
import Logout from "./utilities/Logout.js";

function App() {

  const [user, setUser] = useState({
   
    id: null,
    isAdmin: null
    })

  const unsetUser = () => {
      localStorage.clear();
  }

useEffect(()=>{
  fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
      headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
  .then(res => res.json())
  .then(data => {
      console.log(data)

      if(typeof data._id !== "undefined"){
          setUser({
              id: data._id,
              isAdmin: data.isAdmin
          })
      
      } else {
          setUser({
              id: null,
              isAdmin: null
          })
      }
      
  })
}, []);

  return (
    <div>
      <UserProvider value={{user, setUser, unsetUser}}>
      <AppNavbar />
        <Routes>
          <Route exact path="/" element= {<Home />}/>
          <Route path="/courses" element= {<Courses />}/>
          <Route path="/courseview" element= {<CourseView />}/>
          <Route path="/about" element= {<UnderConstruction />}/>
          <Route path="/contact" element= {<UnderConstruction />}/>
          <Route exact path="/account">
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
          </Route>
          <Route path="/logout" element= {<Logout />}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
