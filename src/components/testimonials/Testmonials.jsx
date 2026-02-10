import profileImage1 from "../../assets/profile-image-1.png";

const Testimonials = () => {
  return (
    <div>
      {/* Top Banner Section */}
      {/* tb = top banner */}
      <div className="component-tb">
        {/* tbtl = top banner top layer */}
        <div className="component-tbtl">
          <div className="container h-100 d-flex align-items-center">
            <div className="text-light">
              <h1 className="color-orange-1">Our Happy Customers</h1>
              <h5>Restaurant / Testimonials</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mt-5">
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
        <div className="text-center mt-5 mb-5">
          <button className="btn btn-outline-secondary">&lt;</button>&nbsp;
          <span>1 / 7</span>&nbsp;
          <button className="btn btn-outline-secondary">&gt;</button>&nbsp;
        </div>
      </div>
    </div>
  );
};

export default Testimonials;