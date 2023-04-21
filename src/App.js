import AppNavbar from './components/AppNavbar.js'
import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.js'
import Courses from './pages/Courses.js'
import Register from './pages/Register.js'

function App() {
  return (
    <div>
      <AppNavbar />
        <Routes>
          <Route exact path="/" element= {<Home />}/>
          <Route path="/courses" element= {<Courses />}/>
          <Route exact path="/account">
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
