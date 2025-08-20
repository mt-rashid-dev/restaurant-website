const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container text-light py-5">
        <div>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div className="mb-4">
              <h3 className="mb-3">24/7 Support</h3>
              <h5><i className="bi bi-envelope"></i>&nbsp;&nbsp;support@example.com</h5>
              <h5><i className="bi bi-telephone"></i>&nbsp;&nbsp;aaa-aaa-aaaa</h5>
              <h5><i className="bi bi-telephone"></i>&nbsp;&nbsp;bbb-bbb-bbbb</h5>
            </div>
            <div className="mb-4">
              <h3 className="mb-3">Our Locations</h3>
              <h5>Street 1, House 1, City 1</h5>
              <h5>Street 2, House 2, City 1</h5>
              <h5>Street 3, House 3, City 1</h5>
            </div>
            <div className="mb-4">
              <h3 className="mb-3">Opening Hours</h3>
              <h5>6:30am - 8:30pm (Mon - Thu)</h5>
              <h5>6:30am - 7:30pm (Sat)</h5>
              <h5>8:00am - 10:00pm (Sun)</h5>
            </div>
          </div></div>
        <hr/>
        <div>
          <div className="d-flex flex-column flex-lg-row justify-content-between text-center">
            <h5>&copy; 2025 Example.com. All rights reserved</h5>
            <h5>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;