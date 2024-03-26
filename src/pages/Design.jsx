import interior from "../assets/spacejoy-KSfe2Z4REEM-unsplash.jpg";
import house from "../assets/house.jpg";
import brand from "../assets/brand.jpg";
import design from "../assets/designing.jpg";
import photoshop from "../assets/photoshop.jpg";
import presentation from "../assets/presentation.jpg";
import photography from "../assets/photography.jpg";
import video from "../assets/videoediting.mp4";
import Display from "../components/display/Display";
import ChangeImage from "../components/changeImage/ChangeImage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

export default function DevIT() {
  const images = [brand, photoshop, design, presentation, house];
  const texts = [
    "Logo Design",
    "Photoshop Editing",
    "Web & Mobile Design",
    "Presentation Design",
    "Architecture & Interior Design",
  ];
  return (
    <>
      <div className="gradient_dev">
        <Navbar />
        <div className="display_area flex justify-center items-center py-5">
          <Display
            heading1="Best Designers and Creators for your business."
            heading2="Find the best design that suits your work and personality."
            url={interior}
          />
        </div>
        <div className=" py-10">
          <div className="py-5 flex flex-col justify-center items-center pb-5 md:flex md:flex-row ">
            <img
              className="h-[40vh] w-[80vw] object-cover m-5 rounded-xl"
              src={photography}
              alt="img"
            />
            <h1 className=" text-white text-4xl pt-5 font-bold mx-10 ">
              Photography
            </h1>
          </div>
          <div className="py-5 flex flex-col justify-center items-center pb-5 md:flex md:flex-row-reverse">
            <video
              autoPlay
              muted
              controls
              className="h-[40vh] w-[80vw] md:w-[70vw]"
            >
              <source src={video} type="video/mp4" />
            </video>
            <h1 className=" text-white text-4xl pt-5 font-bold mx-10">
              Video Editing
            </h1>
          </div>
        </div>
        <div className="row3">
          <div className="text flex justify-center py-10">
            <h1 className="text-white text-3xl p-5 sm:text-4xl font-extrabold my-5">
              Design and creative projects for your most pressing work.
            </h1>
          </div>
          <ChangeImage initial={brand} texts={texts} images={images} />
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
