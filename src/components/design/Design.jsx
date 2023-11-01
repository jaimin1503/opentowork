import "./style.css";
import interior from "./assets/spacejoy-KSfe2Z4REEM-unsplash.jpg";
import house from "./assets/house.jpg";
import brand from "./assets/brand.jpg";
import design from "./assets/designing.jpg";
import photoshop from "./assets/photoshop.jpg";
import presentation from "./assets/presentation.jpg";
import photography from "./assets/photography.jpg";
import video from "./assets/videoediting.mp4";
import Display from "../display/Display";
import ChangeImage from "../changeImage/ChangeImage";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function DevIT() {
  return (
    <>
      <Navbar />

      <div className="gradient_dev">
        <Display
          heading1="Best Designers and Creators for your business."
          heading2="Find the best design that suits your work and personality."
          url={interior}
        />
        <div className="row">
          <div className="row3-photos">
            <img src={photography} alt="img" />
            <h1 className=" text-white text-5xl font-bold mx-10">
              Photography
            </h1>
          </div>
          <hr className="mb-5" />
          <div className="row3-photos">
            <h1>Video Editing</h1>
            <video autoPlay muted controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="row3">
          <div className="text flex justify-center py-10">
            <h1 className="text-white text-6xl font-extrabold my-5">
              Design and creative projects for your most pressing work.
            </h1>
          </div>
          <ChangeImage
            initial={brand}
            text1="Logo Design"
            text2="Photoshop Editing"
            text3="Web & Mobile Design"
            text4="Presentation Design"
            text5="Architecture & Interior Design"
            url1={brand}
            url2={photoshop}
            url3={design}
            url4={presentation}
            url5={house}
          />
        </div>
        <div className="button flex justify-center py-10">
          <Link to="/Welcome">
            <button
              className="bg-purple-500 py-3 px-10 text-white rounded-full hover:scale-105"
              style={{ transition: "0.3s" }}
            >
              Join Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
