import AppNavbar from './components/AppNavbar.js'
import CourseView from './components/CourseView.js'
import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.js'
import Courses from './pages/Courses.js'
import Register from './pages/Register.js'
import UnderConstruction from './utilities/UnderConstruction.js'

function App() {
  return (
    <div>
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
        </Routes>
    </div>
  );
}

export default App;
