import work_img from "./assets/—Pngtree—people characters work near a_7516385.png";
// import "./style.css";
import ai from "./assets/ai.png";
import it from "./assets/IT.png";
import business from "./assets/business.png";
import design from "./assets/design.png";
import worker from "./assets/worker.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import styles from "../../Styles";

export default function Home() {
  return (
    <>
      <div className="gradient_home">
        <Navbar />
        <div className="home_row1 flex flex-col-reverse items-center sm:flex-row ">
          <div className="info_home m-10 sm:ml-20">
            <h1 className={`gradient_text ${styles.h1}`}>
              Explore the sea of Talent,
            </h1>
            <h1 className={`gradient_text ${styles.h1}`}>
              Find the work that suits you.
            </h1>
          </div>
          <div className="home_img">
            <img src={work_img} alt="work" className=" w-[45vw] md:w-[50vw]" />
          </div>
        </div>
        <div className="home_row2 ml-10 text-2xl md:text-3xl lg:text-4xl flex justify-center my-5">
          <div>
            <div className="row2info flex items-start mb-5">
              <span className=" symbol material-symbols-outlined ">
                select_check_box
              </span>
              <h2 className=" text-white">No cost to join</h2>
            </div>
            <div className="row2info flex items-center mb-5">
              <span className=" symbol material-symbols-outlined ">
                push_pin
              </span>
              <h2 className=" text-white">Post a job and hire top talent</h2>
            </div>
            <div className="row2info flex items-center mb-5">
              <span className=" symbol material-symbols-outlined ">stars</span>
              <h2 className=" text-white">
                Work with the best—without breaking the bank
              </h2>
            </div>
          </div>
        </div>
        <div className="catagories">
          <h1 className={`gradient_text ${styles.h1} ml-20`}>
            Brows by caragories:
          </h1>
          <div className="cata-row1 text-white my-10">
            <div className="cata_boxes flex flex-col items-center sm:flex-row justify-center">
              <Link to="/DevIt">
                <div
                  className="the-box m-5 h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] border-2 border-purple-600 p-5 rounded-xl flex flex-col items-center hover:scale-105"
                  style={{ transition: "0.3s" }}
                >
                  <img
                    className="the_img w-[180px] md:w-[210px]"
                    src={it}
                    alt="ai"
                  />
                  <h2 className="box-w-text text-2xl">Development & IT</h2>
                  <p className="box-g-text text-l">1000+ Skills</p>
                </div>
              </Link>

              <div
                className="the-box m-5 h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] border-2 border-purple-600 p-4 rounded-xl flex flex-col items-center hover:scale-105 "
                style={{ transition: "0.3s" }}
              >
                <img
                  className="the_img w-[180px] md:w-[210px]"
                  src={ai}
                  alt="ai"
                />
                <h2 className="box-w-text text-3xl">AI Services</h2>
                <p className="box-g-text text-xl">600+ Skills</p>
              </div>
            </div>
            <div className="cata_boxes2 flex flex-col items-center sm:flex-row justify-center">
              <Link to="/Design">
                <div
                  className="the-box m-5 border-2 h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] border-purple-600 p-4 rounded-xl flex flex-col items-center hover:scale-105 "
                  style={{ transition: "0.3s" }}
                >
                  <img
                    className="the_img w-[180px] md:w-[210px]"
                    src={design}
                    alt="ai"
                  />
                  <h2 className="box-w-text text-3xl">Design & Creation</h2>
                  <p className="box-g-text text-xl">900+ Skills</p>
                </div>
              </Link>
              <div
                className="the-box m-5 border-2 h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] border-purple-600 p-4 rounded-xl flex flex-col items-center hover:scale-105 "
                style={{ transition: "0.3s" }}
              >
                <img
                  className="the_img w-[180px] md:w-[210px]"
                  src={business}
                  alt="ai"
                />
                <h2 className="box-w-text text-3xl">Sales & Marketing</h2>
                <p className="box-g-text text-xl">200+ Skills</p>
              </div>
            </div>
          </div>
        </div>
        <div className="class">
          <div className="row5">
            <img
              src={worker}
              alt="worker"
              className="worker absolute w-full object-cover rounded-lg"
            />
            <div className="z-10">
              <div className=" p-5 sm:p-10 md:p-20">
                <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl relative text-white">
                  Find Talent your way!
                </h1>
                <h2 className=" text-sm sm:text-xl md:text-2xl max-w-xs sm:max-w-md relative text-white">
                  Work with huge network of individual professionals.From quick
                  fixes to lasting solutions.
                </h2>
              </div>
              <div className="p-5 sm:px-10 md:px-20">
                <div className="find bg-purple-600 hover:bg-purple-700 hover:text-purple-100 h-[70px] w-[140px] rounded-lg md:h-[100px] md:w-[200px] my-3 relative">
                  <Link to="/Welcome">
                    <h3 className=" text-white text-sm md:text-lg p-3">
                      Your Project, Our Expertise.
                      <p>&rarr;</p>
                    </h3>
                  </Link>
                </div>
                <div className="find bg-purple-600 hover:bg-purple-700 hover:text-purple-100 h-[70px] w-[140px] rounded-lg md:h-[100px] md:w-[200px] my-3 relative">
                  <Link to="/Welcome">
                    <h3 className=" text-white text-sm md:text-lg p-3">
                      Quality Freelancers, Quality Work.
                      <p>&rarr;</p>
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
