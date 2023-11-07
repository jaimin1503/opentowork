import work_img from "./assets/—Pngtree—people characters work near a_7516385.png";
import "./style.css";
import ai from "./assets/ai.png";
import it from "./assets/IT.png";
import business from "./assets/business.png";
import design from "./assets/design.png";
import worker from "./assets/worker.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  let textAnimation = useRef(null);
  let textAnimation2 = useRef(null);
  let imgAnimation = useRef(null);
  let listAnimation = useRef(null);
  let listAnimation2 = useRef(null);
  let listAnimation3 = useRef(null);

  useEffect(() => {
    gsap.from(
      [
        textAnimation,
        textAnimation2,
        listAnimation,
        listAnimation2,
        listAnimation3,
      ],
      {
        x: -100,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        stagger: 0.2,
      }
    );
    gsap.from([imgAnimation], {
      x: 100,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
    });
  }, []);
  return (
    <>
      <div className="gradient_home">
        <Navbar />
        <div className="home_row1 flex items-center justify-between">
          <div className="info_home pl-20">
            <h1
              ref={(el) => {
                textAnimation = el;
              }}
              className="gradient_text ml-5 mt-3 font-bold text-5xl py-3"
            >
              Explore the sea of Talent,
            </h1>
            <h1
              ref={(el) => {
                textAnimation2 = el;
              }}
              className="gradient_text ml-5 mt-3 font-bold text-5xl"
            >
              Find the work that suits you.
            </h1>
          </div>
          <div className="home_img">
            <img
              ref={(el) => {
                imgAnimation = el;
              }}
              src={work_img}
              alt="work"
              className=" w-[45vw]"
            />
          </div>
        </div>
        <div className="row2 flex justify-center">
          <div>
            <div
              ref={(el) => {
                listAnimation = el;
              }}
              className="row2info flex flex-col items-start justify-center"
            >
              <span className=" symbol material-symbols-outlined mt-5">
                select_check_box
              </span>
              <h1 className=" text-white text-3xl mt-5">No cost to join</h1>
            </div>
            <div
              ref={(el) => {
                listAnimation2 = el;
              }}
              className="row2info flex items-center"
            >
              <span className=" symbol material-symbols-outlined mt-5">
                push_pin
              </span>
              <h1 className=" text-white text-3xl mt-5">
                Post a job and hire top talent
              </h1>
            </div>
            <div
              ref={(el) => {
                listAnimation3 = el;
              }}
              className="row2info flex items-center"
            >
              <span className=" symbol material-symbols-outlined mt-5 ">
                stars
              </span>
              <h1 className=" text-white text-3xl mt-5">
                Work with the best—without breaking the bank
              </h1>
            </div>
          </div>
        </div>
        <div className="catagories">
          <h1 className=" gradient_text">Brows by caragories:</h1>
          <div className="cata-row1">
            <div className="cata_boxes">
              <Link to="/DevIt">
                <div className="the-box" style={{ transition: "0.3s" }}>
                  <img className="the_img" src={it} alt="ai" />
                  <h2 className="box-w-text text-3xl">Development & IT</h2>
                  <p className="box-g-text text-xl">1000+ Skills</p>
                </div>
              </Link>

              <div className="the-box" style={{ transition: "0.3s" }}>
                <img className="the_img" src={ai} alt="ai" />
                <h2 className="box-w-text text-3xl">AI Services</h2>
                <p className="box-g-text text-xl">600+ Skills</p>
              </div>
            </div>
            <div className="cata_boxes2">
              <Link to="/Design">
                <div className="the-box" style={{ transition: "0.3s" }}>
                  <img className="the_img" src={design} alt="ai" />
                  <h2 className="box-w-text text-3xl">Design & Creation</h2>
                  <p className="box-g-text text-xl">900+ Skills</p>
                </div>
              </Link>
              <div className="the-box" style={{ transition: "0.3s" }}>
                <img className="the_img" src={business} alt="ai" />
                <h2 className="box-w-text text-3xl">Sales & Marketing</h2>
                <p className="box-g-text text-xl">200+ Skills</p>
              </div>
            </div>
          </div>
        </div>
        <div className="class">
          <div className="row5">
            <img src={worker} alt="worker" className="worker" />
            <div className="z-10">
              <h1 className=" text-4xl">Find Talent your way!</h1>
              <h2 className=" text-2xl">
                Work with huge network of individual professionals.From quick
                fixes to lasting solutions.
              </h2>
              <div className="find">
                <Link to="/Welcome">
                  <h3 className=" text-white text-xl p-2">
                    Your Project, Our Expertise.
                    <p>&rarr;</p>
                  </h3>
                </Link>
              </div>
              <div className="find">
                <Link to="/Welcome">
                  <h3 className=" text-white text-xl p-2">
                    Quality Freelancers, Quality Work.
                    <p>&rarr;</p>
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
