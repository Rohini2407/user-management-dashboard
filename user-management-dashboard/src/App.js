import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<UserForm isEdit={false} />} />
      <Route path="/edit/:id" element={<UserForm isEdit={true} />} />
    </Routes>
  </Router>
);

export default App;
