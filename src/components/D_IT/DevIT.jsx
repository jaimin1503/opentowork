import "./style.css";
import solodev from "./assets/per-loov-4wOkqiXNP7M-unsplash.jpg";
import python from "./assets/python.png";
import java from "./assets/java.png";
import cpp from "./assets/cpp.png";
import mysql from "./assets/mysql.png";
import nodejs from "./assets/nodejs.png";
import react from "./assets/react.png";
import ruby from "./assets/ruby.png";
import web from "./assets/web.png";
import app from "./assets/app.jpg";
import data from "./assets/data.jpg";
import shopify from "./assets/shopify.jpg";
import ml from "./assets/ml.jpg";
import workpress from "./assets/wordpress.jpg";
import display1 from "./assets/display1.jpg";
import display2 from "./assets/display2.jpg";
import display3 from "./assets/display3.jpg";
import display4 from "./assets/display4.jpg";
import Display from "../display/Display";
import Languages from "../languages/Languages";
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
          heading1="Developers and IT experts to scale your org."
          heading2="Hire the particular experts and get your work done within your timeline."
          url={solodev}
        />
        <div className="row2">
          <h1>Find the best Developers and IT experts</h1>
          <div className="types">
            <Languages url={web} />
            <Languages url={react} />
            <Languages url={ruby} />
            <Languages url={nodejs} />
          </div>
          <div className="types flex justify-between">
            <Languages url={mysql} />
            <Languages url={python} />
            <Languages url={cpp} />
            <Languages url={java} />
          </div>
        </div>
        <div className="row3">
          <div className="text">
            <h1>Development and IT projects for all yoour need.</h1>
          </div>
          <ChangeImage
            initial={app}
            text1="Mobile app Development"
            text2="Shopify Development"
            text3="WordPress Development"
            text4="Data Visualization"
            text5="Machine Learning"
            url1={app}
            url2={shopify}
            url3={workpress}
            url4={data}
            url5={ml}
          />
        </div>
        <div className="row4">
          <div className="button">
            <Link to="/Welcome">
              <button>Join Now</button>
            </Link>
          </div>
          <div className="row3-photos">
            <img src={display1} alt="img" />
            <img src={display2} alt="img" />
          </div>
          <div className="row3-photos">
            <img src={display3} alt="img" />
            <img src={display4} alt="img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
