import './style.css'
import { useState } from "react"

export default function Welcome() {
	const [text,setText] = useState({buttontag:"Apply as client"})
	function handleChange(event) {
		const { name, value,} = event.target;	
		setText((pre) => {
		  return {
			...pre,
			[name]:value,
		  };
		});
	  }
	const mystyle = {
		fontFamily: `'Lobster', cursive`
	}
  return (
	<div className="wel-text gradient_home text-white">
		<div className="wel-navbar">
			<h1 style={{mystyle}}>OpenToWork</h1>
		</div>
		<div className="wel-flex">
			<h1 style={{fontFamily:`'Dosis', 'sans-serif'`}}>Welcome Hustler!</h1>
			<h2 style={{fontFamily:`'Dosis', 'sans-serif'`}}>Get Started!</h2>
		<div className="check_boxes">
			<div className="welcome_form">
				<input on type="radio" name="buttontag" value="Apply as client" id="client" onChange={handleChange} checked={text.buttontag === "Apply as client"} />
				<label htmlFor="client"><p className="wel-mx-auto">
					I am a client hiring for the project.
				</p></label>
				
			</div>
			<div className="welcome_form">
				<input type="radio" name="buttontag" value="Apply as freelancer" id="clien"  onChange={handleChange} checked={text.buttontag === "Apply as freelancer"}/>
				<label htmlFor="clien"><p className=" wel-mx-auto">
					I am freelancer, looking for work.
				</p></label>
			</div>
		</div>
		<div>
			<button className="wel-py-3" type="submit" >{text.buttontag}</button>
			<p className="well-mt-5">Already have an account <a className="wel-text-purple-600" href="/">Log in</a></p>
		</div>
		</div>
	</div>
  )
}