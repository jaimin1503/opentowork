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
        <div className="display_area flex justify-center items-center py-5">
          <Display
            heading1="Best Designers and Creators for your business."
            heading2="Find the best design that suits your work and personality."
            url={interior}
          />
        </div>
        <div className=" py-10">
          <div className="py-5 flex justify-center items-center pb-5">
            <img
              className="h-[40vh] w-[50vw] object-cover m-5 rounded-xl"
              src={photography}
              alt="img"
            />
            <h1 className=" text-white text-5xl font-bold mx-10">
              Photography
            </h1>
          </div>
          <div className="py-5 flex justify-center items-center pb-5">
            <h1 className=" text-white text-5xl font-bold mx-10">
              Video Editing
            </h1>
            <video autoPlay muted controls className="h-[40vh] w-[50vw]">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="row3">
          <div className="text flex justify-center py-10">
            <h1 className="text-white text-5xl font-extrabold my-5">
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
