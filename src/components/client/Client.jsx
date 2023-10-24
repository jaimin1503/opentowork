import '../../index.css'
import logo from './586273b931349e0568ad89df.png'

export default function Client() {
  return (
	<div>
		<div className="navbar flex justify-between">
			<div className="left_navbar w-[20%]">
				<ul className=' list-none flex justify-around py-2 items-center'>
				<li className=' cursor-pointer logo w-8 h-8'><img src={logo} alt="logo" /></li>
				<li className=' cursor-pointer'>Jobs</li>
				<li className=' cursor-pointer'>Talent</li>
				</ul>
			</div>
			<div className="right_navbar">
				<ul className="flex justify-around list-none  items-center py-2 ">
					<li><input className=' rounded-full border-2 p-1 pl-5' placeholder='Search' type="text" /></li>
				</ul>
			</div>
		</div>
	</div>
  )
}