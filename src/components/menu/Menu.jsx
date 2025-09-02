import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { appetizers } from "../../foodItems";
import { entrees } from "../../foodItems";
import SingleItem from "./SingleItem";

const Menu = () => {
  const [menuItem, setMenuItem] = useState("Appetizers");
  const [foodItems, setFoodItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const menuItemParam = new URLSearchParams(location.search).get("menuItem");
    if (menuItemParam) {
      setMenuItem(menuItemParam)
    } else {
      setFoodItems(appetizers);
    }
  }, []);

  const changeMenuItem = (item) => {
    setMenuItem(item);
    if (item === "Appetizers") {
      setFoodItems(appetizers);
    } else if (item === "Entrees") {
      setFoodItems(entrees);
    }
  };

  return (
    <div>
      {/* Top Banner Section */}
      {/* tb = top banner */}
      <div className="component-tb">
        {/* tbtl = top banner top layer */}
        <div className="component-tbtl">
          <div className="container h-100 d-flex align-items-center">
            <div className="text-light">
              <h1 className="color-orange-1">Delicious Dishes</h1>
              <h5>Restaurant / Menu</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Menu Section */}
      <div className="container py-3 border-bottom border-3 mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">{menuItem}</h3>
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Menu
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={() => changeMenuItem("Appetizers")}>Appetizers</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => changeMenuItem("Entrees")}>Entrees</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => changeMenuItem("Desserts")}>Desserts</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => changeMenuItem("Tea & Coffee")}>Tea & Coffee</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu Items Section */}
      <div className="container mb-5">
        {foodItems.map((foodItem, index) => <SingleItem key={index} foodItem={foodItem}/>)}
      </div>
    </div>
  );
};

export default Menu;