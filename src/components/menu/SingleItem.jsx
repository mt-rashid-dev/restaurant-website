import "./SingleItem.css";
import imageNotFound from "../../assets/image-not-found.png"

const SingleItem = ({ foodItem }) => {
  return (
    <div className="SingleItem my-3 p-4 rounded-5 mx-auto bg-orange-1 text-light">
      <div className="d-flex flex-column flex-sm-row align-items-center">
        <div className="SingleItem-image-div px-3 text-center"><img src={imageNotFound} alt="" className="SingleItem-image rounded-5"/></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 my-2 text-center text-sm-start"><h2 className="fw-bold">{foodItem.foodTitle}</h2></div>
            <div className="col-12 col-sm-6 my-2 text-center"><h2 className="fw-bold">${foodItem.price}</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;