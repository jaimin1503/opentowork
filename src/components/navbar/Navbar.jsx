import './style.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Navbar() {
	const navigat=useNavigate();
	const signuphandler=()=>{
		navigat("/welcome")
	}
  return (
	<div className="flex  justify-between gradient_home">
		<div className="left_side w-[60vw]">
			<ul className=" flex justify-around border-b-2 py-3 border-purple-600">
				<Link to="/" className=" cursor-pointer"><img src="#" alt="sdfg" /></Link>
				<Link to='/DevIT' className=" text-white cursor-pointer hover:text-purple-200">Development & IT</Link>
				<Link to='/AI' className=" text-white cursor-pointer hover:text-purple-200">AI Services</Link>
				<li className=" text-white cursor-pointer hover:text-purple-200">Design & Creation</li>
				<li className=" cursor-pointer text-white hover:text-purple-200">Sales & Marketing</li>
				<li className=" cursor-pointer text-white hover:text-purple-200">Writing & more</li>
			</ul>
		</div>
		<div className="right_side w-[40vw] flex border-b-2 justify-end px-5 items-center border-purple-600">
			<button className="log_in" >
				<p className=" text-white cursor-pointer px-5 hover:text-purple-200">log in</p>
			</button>
			<div className="sign_up">
				<button className=" bg-purple-500 py-2 px-5 rounded-full text-white hover:bg-purple-600 hover:text-purple-200" onClick={signuphandler}>Sign up</button>
			</div>
		</div>
		
	</div>
  )
}