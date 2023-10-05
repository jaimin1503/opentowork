import './style.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

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
	<div className="navbar gradient_home">
		<div className="left_side">
			<ul className="ula v_nav_resp">
				<Link to="/" className=" li"><img src="#" alt="sdfg" /></Link>
				<Link to='/DevIT' className=" li">Development & IT</Link>
				<Link to='/AI' className=" li">AI Services</Link>
				<Link to='/Design' className=" li">Design & Creation</Link>
			</ul>
		</div>
		<div className="right_side v_nav_resp w-[40vw] flex justify-end px-5 items-center">
			<button className="log_in" >
				<p className=" text-white cursor-pointer px-5 hover:text-purple-200">log in</p>
			</button>
			<div className="up">
				<button className="sign_up" onClick={signuphandler}>Sign up</button>
			</div>
		</div>
		
	</div>
	</>
  )
}