import "./Home.css";
import foodImage1 from "../../assets/food-image-1.jpg";
import chefImage1 from "../../assets/chef-image-1.jpg";
import appetizer from "../../assets/appetizer.png";
import dinner from "../../assets/dinner.png";
import dessert from "../../assets/dessert.png";
import coffeePot from "../../assets/coffee-pot.png";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="Home-top-banner">
        {/* tb-content = top-banner-content */}
        <div className="Home-tb-content rounded-5">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti repellendus corporis recusandae vitae voluptas debitis nisi repellat ipsa quibusdam iusto quas earum assumenda odio fugit sunt sapiente, expedita, illum, ut dolores.</p>
          <button className="py-2 rounded-pill">Book a Table</button>
        </div>
      </div>

      {/* wcs = why choose us */}
      <div className="Home-wcs">
        <div className="Home-wcs-header px-2 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold">Why Choose Us</h1>
            {/* fi1 = food image 1 */}
            <img src={foodImage1} alt="" className="Home-wcs-fi1 rounded-circle"/>
          </div>
        </div>
        <div className="Home-wcs-main mx-auto">
          <div className="d-flex h-100 flex-column flex-lg-row justify-content-around align-items-center gap-4 px-4">
            {/* ci1 = chef image 1 */}
            <div className="Home-ci1-div">
              <img src={chefImage1} alt="" className="Home-ci1"/>
              <div className="Home-rounded-shape"></div>
            </div>
            <div className="Home-wcs-content">
              <div>
                <h4><i className="bi bi-check-circle Home-check-icon"></i>&nbsp;<span className="color-gray-1 fw-bold">Fresh Food</span></h4>
                <p className="color-gray-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sapiente nam est doloremque ducimus obcaecati.</p>
              </div>
              <div>
                <h4><i className="bi bi-check-circle Home-check-icon"></i>&nbsp;<span className="color-gray-1 fw-bold">Delicious Food</span></h4>
                <p className="color-gray-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sapiente nam est doloremque ducimus obcaecati.</p>
              </div>
              <div>
                <h4><i className="bi bi-check-circle Home-check-icon"></i>&nbsp;<span className="color-gray-1 fw-bold">Healthy Food</span></h4>
                <p className="color-gray-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sapiente nam est doloremque ducimus obcaecati.</p>
              </div>
              <div>
                <h4><i className="bi bi-check-circle Home-check-icon"></i>&nbsp;<span className="color-gray-1 fw-bold">Easy Reservation</span></h4>
                <p className="color-gray-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sapiente nam est doloremque ducimus obcaecati.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="Home-menu-content py-5">
        <div className="container">
          <h1 className="text-center fw-bold mb-3 py-2 rounded-pill">Menu</h1>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              {/* mc = menu category */}
              <div className="Home-mc m-2 p-3 rounded-5">
                {/* mci = menu category icon */}
                <img src={appetizer} alt="" className="Home-mci d-block mx-auto p-2 rounded-circle"/>
                <h4 className="fw-bold mt-3 text-center">Appetizers</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="Home-mc m-2 p-3 rounded-5">
                <img src={dinner} alt="" className="Home-mci d-block mx-auto p-2 rounded-circle"/>
                <h4 className="fw-bold mt-3 text-center">Entrees</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="Home-mc m-2 p-3 rounded-5">
                <img src={dessert} alt="" className="Home-mci d-block mx-auto p-2 rounded-circle"/>
                <h4 className="fw-bold mt-3 text-center">Desserts</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="Home-mc m-2 p-3 rounded-5">
                <img src={coffeePot} alt="" className="Home-mci d-block mx-auto p-2 rounded-circle"/>
                <h4 className="fw-bold mt-3 text-center">Tea & Coffee</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "400px", backgroundColor: "yellow" }}></div>
    </div>
  );
};

export default Home;