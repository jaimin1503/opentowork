import solodev from "../assets/per-loov-4wOkqiXNP7M-unsplash.jpg";
import python from "../assets/python.png";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import ruby from "../assets/ruby.png";
import web from "../assets/web.png";
import app from "../assets/app.jpg";
import data from "../assets/data.jpg";
import shopify from "../assets/shopify.jpg";
import ml from "../assets/ml.jpg";
import workpress from "../assets/wordpress.jpg";
import Display from "../components/display/Display";
import Languages from "../components/languages/Languages";
import ChangeImage from "../components/changeImage/ChangeImage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

export default function DevIT() {
  const texts = [
    "Mobile app Development",
    "Shopify Development",
    "WordPress Development",
    "Data Visualization",
    "Machine Learning",
  ];
  const images = [app, shopify, workpress, data, ml];
  return (
    <>
      <div className="gradient_dev">
        <Navbar />
        <div className="displayarea flex justify-center items-center py-5 sm:flex sm:flex-col">
          <Display
            heading1="Developers and IT experts to scale your org."
            heading2="Hire the particular experts and get your work done within your timeline."
            url={solodev}
          />
        </div>
        <div className=" flex flex-col items-center justify-center py-5">
          <h1 className=" text-white text-3xl sm:text-4xl m-5 font-bold">
            Find the best Developers and IT experts
          </h1>
          <div className="flex flex-wrap justify-center">
            <Languages url={web} />
            <Languages url={react} />
            <Languages url={ruby} />
            <Languages url={nodejs} />
            <Languages url={mysql} />
            <Languages url={python} />
            <Languages url={cpp} />
            <Languages url={java} />
          </div>
        </div>
        <div className="row3">
          <div className=" flex justify-center py-5">
            <h1 className=" text-3xl sm:text-4xl text-white m-5 font-bold">
              Development and IT projects for all yoour need.
            </h1>
          </div>
          <ChangeImage initial={app} images={images} texts={texts} />
        </div>
        <div className="row4">
          <div
            className=" flex justify-center py-10"
            style={{ transition: "0.2s" }}
          >
            <Link to="/Welcome">
              <button className=" bg-purple-500 py-3 px-10 text-white rounded-full text-sm hover:scale-105 hover:bg-purple-600">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
