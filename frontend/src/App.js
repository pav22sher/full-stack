import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";

function App() {
  return (
      <div>
          <Router>
              <Navbar/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/add" element={<AddUser/>}/>
                  <Route exact path="/edit/:id" element={<EditUser/>}/>
                  <Route exact path="/view/:id" element={<ViewUser/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
