import "./About.css";
import foodImage2 from "../../assets/food-image-2.jpg";
import foodImage3 from "../../assets/food-image-3.jpg";
import chefImage2 from "../../assets/chef-image-2.jpg";
import chefImage3 from "../../assets/chef-image-3.jpg";
import chefImage4 from "../../assets/chef-image-4.jpg";

const About = () => {
  // fresh and delicious dishes
  // healthy and nutritious ingredients

  // meet with our master chefs
  return (
    <div>
      <div>
        {/* Top Banner Section */}
        {/* tb = top banner */}
        <div className="component-tb">
          {/* tbtl = top banner top layer */}
          <div className="component-tbtl">
            <div className="container h-100 d-flex align-items-center">
              <div className="text-light">
                <h1 className="color-orange-1">About Us</h1>
                <h5>Restaurant / About Us</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our History Section */}
      <div className="container my-5 pb-5">
        <h1>Our History</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique tempus ipsum sed tincidunt. Integer diam lorem, semper quis nisi vel, scelerisque semper arcu. Proin semper pellentesque semper. Suspendisse imperdiet, ipsum quis aliquam congue, velit mauris porttitor mauris, non ultricies est nisi vitae felis. Suspendisse aliquet, lectus id convallis varius, dui lorem pretium ligula, sit amet aliquet neque nunc ut metus. Ut id mi bibendum, congue orci eu, vulputate nibh. Donec non tempus lorem. In pulvinar rhoncus ex, eget dictum dolor cursus et. Curabitur libero enim, vulputate quis purus ac, gravida iaculis massa. Duis quis dictum urna. Cras sem velit, aliquet vitae felis at, dapibus maximus risus. Quisque in consectetur tellus, quis convallis nulla.</p>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-12 col-sm-4 mb-3">
              {/* acs = about circle shape */}
              <div className="About-acs border border-3 border-dark rounded-circle mx-auto">
                <div className="d-flex h-100 justify-content-center align-items-center">
                  <span className="fs-1">10+</span>
                </div>
              </div>
              <h5 className="text-center mt-3">Years of<br/>Experience</h5>
            </div>
            <div className="col-12 col-sm-4 mb-3">
              {/* acs = about circle shape */}
              <div className="About-acs border border-3 border-dark rounded-circle mx-auto">
                <div className="d-flex h-100 justify-content-center align-items-center">
                  <span className="fs-1">1K+</span>
                </div>
              </div>
              <h5 className="text-center mt-3">Served Customers<br/>Daily</h5>
            </div>
            <div className="col-12 col-sm-4 mb-3">
              {/* acs = about circle shape */}
              <div className="About-acs border border-3 border-dark rounded-circle mx-auto">
                <div className="d-flex h-100 justify-content-center align-items-center">
                  <span className="fs-1">50+</span>
                </div>
              </div>
              <h5 className="text-center mt-3">Number of<br/>Dishes</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="About-dishes row g-3 p-3 mb-5 rounded-5">
            <div className="col-12 col-sm-4 m-0">
              <div>
                <img src={foodImage2} alt="" className="w-100 rounded-5"/>
              </div>
            </div>
            <div className="col-12 col-sm-8 m-0">
              <div>
                <h3>Fresh and Delicious Dishes</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa laboriosam cum ullam saepe facere fugiat accusantium possimus dolorem tenetur, iure nobis omnis a? Asperiores vel, amet, veritatis ratione veniam libero totam enim doloremque, necessitatibus quaerat consectetur iusto id? Aut nam ab dolore quibusdam incidunt est similique expedita nostrum tempora sequi!</p>
              </div>
            </div>
          </div>
          <div className="About-dishes row p-3 g-3 rounded-5">
            <div className="col-12 col-sm-4 m-0">
              <div>
                <img src={foodImage3} alt="" className="w-100 rounded-5"/>
              </div>
            </div>
            <div className="col-12 col-sm-8 m-0">
              <div>
                <h3>Healthy and Nutritous Ingredients</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente laudantium saepe alias quaerat nobis blanditiis ipsum quidem soluta consectetur nesciunt ratione laborum ex consequuntur atque esse reiciendis deserunt at, minima dolores veritatis repellat! Tenetur, delectus laborum animi, dolorem debitis nisi quam quo accusantium ullam, distinctio numquam veritatis impedit voluptatem!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet with Our Master Chefs */}
      <div className="container my-5">
        <h1 className="text-center">Meet with Our Master Chefs</h1>
        <p className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore dolorem voluptatem nulla dolor, cum officia aliquam eligendi molestiae animi?</p>
        <div className="row g-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="About-chefs text-center">
              <img src={chefImage2} alt=""/>
            </div>
            <h3 className="mt-3 text-center">Walter Smith</h3>
            <h5 className="text-center">Senior Chef</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="About-chefs text-center">
              <img src={chefImage3} alt=""/>
            </div>
            <h3 className="mt-3 text-center">Liam Kane</h3>
            <h5 className="text-center">Junior Chef</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="About-chefs text-center">
              <img src={chefImage4} alt=""/>
            </div>
            <h3 className="mt-3 text-center">Laura Freya</h3>
            <h5 className="text-center">Senior Chef</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;