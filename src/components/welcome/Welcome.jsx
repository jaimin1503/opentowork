import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  const [text, setText] = useState({ buttontag: "Apply as client" });
  const [role, setRole] = useState("/Clientsign");
  const [login, setLogin] = useState("/Clientlog");

  function handleChange(event) {
    if (text.buttontag === "Apply as client") {
      setRole("/SignUp");
    } else if (text.buttontag === "Apply as freelancer") {
      setRole("/Clientsign");
    }
    const { name, value } = event.target;
    setText((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
    if (role === "/Clientsign") {
      setLogin("/Login");
    } else if (role === "/SignUp") {
      setLogin("/Clientlog");
    }
  }

  const mystyle = {
    fontFamily: `Lobster`,
  };

  function handleRadioButtonClick(value) {
    setText({ buttontag: value });
  }

  return (
    <div className="wel-text gradient_home text-white">
      <div className="wel-navbar">
        <h1 className="text-4xl text-white font-extralight" style={mystyle}>
          OpenToWork
        </h1>
      </div>
      <div className="wel-flex">
        <h1
          className="text-5xl font-bold"
          style={{ fontFamily: `'Dosis', 'sans-serif'` }}
        >
          Welcome User 👋
        </h1>
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: `'Dosis', 'sans-serif'` }}
        >
          Get Started! 🚀
        </h2>
        <div className="check_boxes">
          <div className="welcome_form">
            <input
              type="radio"
              name="buttontag"
              value="Apply as client"
              id="client"
              onChange={handleChange}
              checked={text.buttontag === "Apply as client"}
              onClick={() => handleRadioButtonClick("Apply as client")}
            />
            <label htmlFor="client">
              <p className="wel-mx-auto">
                I am a client hiring for the project.
              </p>
            </label>
          </div>
          <div className="welcome_form">
            <input
              type="radio"
              name="buttontag"
              value="Apply as freelancer"
              id="freelancer"
              onChange={handleChange}
              checked={text.buttontag === "Apply as freelancer"}
              onClick={() => handleRadioButtonClick("Apply as freelancer")}
            />
            <label htmlFor="freelancer">
              <p className="wel-mx-auto">
                I am a freelancer, looking for work.
              </p>
            </label>
          </div>
        </div>
        <div>
          <Link to={role}>
            <button className="wel-py-3 bg-purple-600" type="submit">
              {text.buttontag}
            </button>
          </Link>
          <p className="well-mt-5">
            Already have an account?{" "}
            <Link className="wel-text-purple-600" to={login}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
