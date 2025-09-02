import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/utility/layout/Layout";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Reservation from "./components/reservation/Reservation";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout>
            <Home />
          </Layout>}/>
          <Route path="/home" element={<Layout>
            <Home />
          </Layout>}/>
          <Route path="/menu" element={<Layout>
            <Menu />
          </Layout>}/>
          <Route path="/reservation" element={<Layout>
            <Reservation />
          </Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
