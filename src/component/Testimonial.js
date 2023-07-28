import Carousel from "react-bootstrap/Carousel";

function Testimonial(props) {
  return (
    <Carousel className={`carousel `}>
      <Carousel.Item>
        <div className="crl d-flex">
          <div>
            <img src={require("../Assests/image0.jpg")} alt="logo" />
          </div>
          <div>
            <h6>Mark Jecno/ Web Designer</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="crl d-flex">
          <div>
            <img src={require("../Assests/image1.jpg")} alt="logo" />
          </div>
          <div>
            <h6>Mark Jecno/ Web Designer</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="crl d-flex">
          <div>
            <img src={require("../Assests/image2.jpg")} alt="logo" />
          </div>
          <div>
            <h6>Mark Jecno/ Web Designer</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonial;
