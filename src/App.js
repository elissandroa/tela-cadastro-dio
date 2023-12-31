import { BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/login";
import Feed from "./pages/Feed";
import { Cadastro } from "./pages/Cadastro";


export default function App() {

      return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
        );
}



