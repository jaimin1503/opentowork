import './style.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './script.js'

export default function Navbar() {
	const navigat=useNavigate();
	const signuphandler=()=>{
		navigat("/welcome")
	}
	const navbar = document.querySelector('.navbar')
	const ula = document.querySelector('.ula')
	const handleClick = () => {
		navbar.classList.toggle('h_nav_resp')
		ula.classList.toggle('v_nav_resp')
	}
  return (
	<>
	<div onClick={handleClick} class="burger" id="burger">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
	<div className="navbar h_nav_resp flex  justify-between gradient_home border-b-2 border-purple-600" style={{transition:'0.5s'}}>
		<div className="left_side w-[60vw] ">
			<ul className="ula v_nav_resp flex justify-around py-3">
				<Link to="/" className=" li cursor-pointer"><img src="#" alt="sdfg" /></Link>
				<Link to='/DevIT' className=" li text-white cursor-pointer hover:text-purple-200">Development & IT</Link>
				<Link to='/AI' className=" li text-white cursor-pointer hover:text-purple-200">AI Services</Link>
				<Link to='/Design' className=" li text-white cursor-pointer hover:text-purple-200">Design & Creation</Link>
				<Link to='/' className=" li cursor-pointer text-white hover:text-purple-200">Sales & Marketing</Link>
				<Link to='/' className=" li cursor-pointer text-white hover:text-purple-200">Writing & more</Link>
			</ul>
		</div>
		<div className="right_side v_nav_resp w-[40vw] flex justify-end px-5 items-center">
			<button className="log_in" >
				<p className=" text-white cursor-pointer px-5 hover:text-purple-200">log in</p>
			</button>
			<div className="sign_up">
				<button className=" bg-purple-500 py-2 px-5 rounded-full text-white hover:bg-purple-600 hover:text-purple-200" onClick={signuphandler}>Sign up</button>
			</div>
		</div>
		
	</div>
	</>
  )
}