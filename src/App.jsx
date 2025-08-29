import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/utility/layout/Layout";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
