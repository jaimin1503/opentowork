import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Navbar() {
	const navigat=useNavigate();
	const signuphandler=()=>{
		navigat("/welcome")
	}
	const [isOpen,setIsOpen] = useState(false);
	const [visible,setVisible] = useState(false);
	const handleClick = () =>{
		setIsOpen(!isOpen)
		setVisible(!visible)
	}
  return (
	<>
	<div onClick={handleClick} class="burger" id="burger">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
	<div className={`navbar ${isOpen ? 'h_nav_resp' : ''} gradient_home`} >
		<div className="left_side">
			<ul className={`ula ${!visible ? 'v_nav_resp' : ''}`}>
				<Link to="/" className=" li"><img src="#" alt="sdfg" /></Link>
				<Link to='/DevIT' className=" li">Development & IT</Link>
				<Link to='/AI' className=" li">AI Services</Link>
				<Link to='/Design' className=" li">Design & Creation</Link>
			</ul>
		</div>
		<div className={`right_side ${!visible ? 'v_nav_resp' : ''}`}>
			<div className="log_in" >
				<p className=" text-white cursor-pointer px-5 hover:text-purple-200">log in</p>
			</div>
			<div className="up">
				<button className="sign_up" onClick={signuphandler}>Sign up</button>
			</div>
		</div>
		
	</div>
	</>
  )
}