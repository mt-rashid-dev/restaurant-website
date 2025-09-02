const Reservation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h1 className="color-orange-1">Book a Table</h1>
              <h5>Restaurant / Reservation</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Form Container */}
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control border border-dark" id="firstName"/>
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control border border-dark" id="lastName"/>
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email Address</label>
              <input type="email" className="form-control border border-dark" id="emailInput"/>
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNuber" className="form-label">Phone Number</label>
              <input type="tel" className="form-control border border-dark" id="phoneNumber"/>
            </div>
            <div className="mb-3">
              <label htmlFor="totalGuests" className="form-label">Total Guests</label>
              <input type="number" min="1" step="1" className="form-control border border-dark" id="totalGuests"/>
            </div>
            <div className="mb-3">
              <label htmlFor="dateInput" className="form-label">Reservation Date</label>
              <input type="date" className="form-control border border-dark" id="dateInput"/>
            </div>
            <div className="mb-3">
              <label htmlFor="timeInput" className="form-label">Reservation Time</label>
              <input type="time" className="form-control border border-dark" id="timeInput"/>
            </div>
            <div className="mb-3">
              <label htmlFor="specialNotes" className="form-label">Special Notes</label>
              <textarea className="form-control border border-dark" id="specialNotes"></textarea>
            </div>
            <div className="mb-3 text-center">
              <button className="btn btn-dark">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;