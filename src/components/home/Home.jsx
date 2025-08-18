import "./Home.css";
import foodImage1 from "../../assets/food-image-1.png";
import chefImage1 from "../../assets/chef-image-1.jpg";
import salad from "../../assets/salad.png";
import dinner from "../../assets/dinner.png";
import iceCream from "../../assets/ice-cream.png";
import teaCup from "../../assets/tea-cup.png";
import profileImage1 from "../../assets/profile-image-1.png";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="Home-top-banner">
        {/* tb-content = top-banner-content */}
        <div className="Home-tb-content rounded-5">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti repellendus corporis recusandae vitae voluptas debitis nisi repellat ipsa quibusdam iusto quas earum assumenda.</p>
          <button className="py-2 rounded-pill">Book a Table</button>
        </div>
        {/* smic = social media icon container */}
        <div className="Home-smic">
          {/* smi = social media icon */}
          <div className="Home-smi">
            <i className="bi bi-facebook text-primary"></i>
          </div>
          <div className="Home-smi">
            <i className="bi bi-instagram bg-light rounded-3 px-1"></i>
          </div>
          <div className="Home-smi">
            <i className="bi bi-twitter bg-info text-light rounded-circle px-1"></i>
          </div>
          <div className="Home-smi">
            <i className="bi bi-pinterest text-danger"></i>
          </div>
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
                {/* mci = menu category icon div */}
                <div className="Home-mcid p-2 mx-auto rounded-circle text-center">
                  <img src={salad} alt="" className="w-75"/>
                </div>
                <h4 className="fw-bold mt-3 text-center">Appetizers</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="Home-mc m-2 p-3 rounded-5">
                <div className="Home-mcid p-2 mx-auto rounded-circle text-center">
                  <img src={dinner} alt="" className="w-75"/>
                </div>
                <h4 className="fw-bold mt-3 text-center">Entrees</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="Home-mc m-2 p-3 rounded-5">
                <div className="Home-mcid p-2 mx-auto rounded-circle text-center">
                  <img src={iceCream} alt="" className="w-25"/>
                </div>
                <h4 className="fw-bold mt-3 text-center">Desserts</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="Home-mc m-2 p-3 rounded-5">
                <div className="Home-mcid p-2 mx-auto rounded-circle text-center">
                  <img src={teaCup} alt="" className="w-50"/>
                </div>
                <h4 className="fw-bold mt-3 text-center">Tea & Coffee</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="Home-testimonials container py-5">
        <h1 className="text-center">Testimonials</h1>
        <p className="text-center mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-3 p-2">
            {/* tc = testimonial card */}
            <div className="Home-tc p-4 rounded-5 position-relative">
              <img src={profileImage1} alt=""/>
              <h5 className="fw-bold text-center py-2">User One</h5>
              <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta quidem dolores nulla qui blanditiis sed?</p>
              <i className="bi bi-quote position-absolute top-0 left-0 fs-1 fw-bold"></i>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 p-2">
            {/* tc = testimonial card */}
            <div className="Home-tc p-4 rounded-5 position-relative">
              <img src={profileImage1} alt=""/>
              <h5 className="fw-bold text-center py-2">User One</h5>
              <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta quidem dolores nulla qui blanditiis sed?</p>
              <i className="bi bi-quote position-absolute top-0 left-0 fs-1 fw-bold"></i>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 p-2">
            {/* tc = testimonial card */}
            <div className="Home-tc p-4 rounded-5 position-relative">
              <img src={profileImage1} alt=""/>
              <h5 className="fw-bold text-center py-2">User One</h5>
              <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta quidem dolores nulla qui blanditiis sed?</p>
              <i className="bi bi-quote position-absolute top-0 left-0 fs-1 fw-bold"></i>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 p-2">
            {/* tc = testimonial card */}
            <div className="Home-tc p-4 rounded-5 position-relative">
              <img src={profileImage1} alt=""/>
              <h5 className="fw-bold text-center py-2">User One</h5>
              <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta quidem dolores nulla qui blanditiis sed?</p>
              <i className="bi bi-quote position-absolute top-0 left-0 fs-1 fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-outline-secondary">Read More</button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="Home-about container-fluid">
        <div className="row">
          {/* alc = about left column */}
          <div className="Home-alc col-12 col-lg-6 p-0">
            {/* atllc = about top layer of left column */}
            <div className="Home-atllc">
              <button className="Home-ab">About Us</button>
            </div>
          </div>
          {/* arc = about right column */}
          <div className="Home-arc col-12 col-lg-6 p-0">
            {/* atlrc = about top layer of right column */}
            <div className="Home-atlrc h-100 pt-5 position-relative">
              <h5 className="pb-1 fw-bold mx-5">Let's Discover Our History</h5>
              <p className="mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptatibus? Rerum architecto ducimus at nisi sit eius accusamus reiciendis illum neque doloremque unde, eum quidem incidunt est mollitia enim saepe distinctio, nulla quo id sequi impedit!</p>
              <div className="container-fluid">
                <div className="row mt-5">
                  <div className="col-12 col-sm-4 mb-3">
                    {/* acs = about circle shape */}
                    <div className="Home-acs border border-3 border-light rounded-circle mx-auto">
                      <div className="d-flex h-100 justify-content-center align-items-center">
                        <span className="fs-1">10+</span>
                      </div>
                    </div>
                    <h5 className="text-center mt-3">Years of<br/>Experience</h5>
                  </div>
                  <div className="col-12 col-sm-4 mb-3">
                    {/* acs = about circle shape */}
                    <div className="Home-acs border border-3 border-light rounded-circle mx-auto">
                      <div className="d-flex h-100 justify-content-center align-items-center">
                        <span className="fs-1">1K+</span>
                      </div>
                    </div>
                    <h5 className="text-center mt-3">Served Customers<br/>Daily</h5>
                  </div>
                  <div className="col-12 col-sm-4 mb-3">
                    {/* acs = about circle shape */}
                    <div className="Home-acs border border-3 border-light rounded-circle mx-auto">
                      <div className="d-flex h-100 justify-content-center align-items-center">
                        <span className="fs-1">50+</span>
                      </div>
                    </div>
                    <h5 className="text-center mt-3">Number of<br/>Dishes</h5>
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-block text-center position-absolute bottom-0 w-100 py-5">
                <button className="btn btn-outline-light rounded-0">Read More</button>
              </div>
              <div className="d-lg-none text-center w-100 py-5">
                <button className="btn btn-outline-light rounded-0">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;