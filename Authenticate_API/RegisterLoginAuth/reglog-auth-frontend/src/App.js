
import './App.css';
import Login from './pages/Login'
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Signup from './pages/Signup';
import Adminpage from './pages/Adminpage';
import Successlgin from './pages/Successlogin';

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <Router>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/admin" element={<Adminpage />} />
          <Route exact path="/successlogin" element={<Successlgin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
