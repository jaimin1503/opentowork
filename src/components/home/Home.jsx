import Navbar from "../navbar/Navbar";
import work_img from './—Pngtree—people characters work near a_7516385.png'
import './style.css'
import ai from './ai.png'
import it from './IT.png'
import business from './business.png'
import design from './design.png'

export default function Home() {
  return (
	<div className="gradient_home">
		<Navbar/>
		<div className="row1 flex justify-around mt-10">
		<div className="info_home flex flex-col justify-center">
			<h1 className=" gradient_text text-5xl font-bold">
				Explore the sea of Talent,
			</h1>
			<h1 className=" gradient_text text-5xl mt-5 font-bold">
				Find the work that suits you.
			</h1>
		</div>
		<div className="home_img">
			<img className="w-[45vw]" src={work_img} alt="work" />
		</div>
		</div>
		<div className="row2">
			<div className="row2info flex flex-col justify-center items-start mx-20">
				<div className=" flex justify-center py-5">
					<span class="material-symbols-outlined text-white px-5 text-3xl">select_check_box</span>
					<h1 className=" text-white text-3xl">No cost to join</h1>
				</div>
				<div className=" flex justify-center py-5">
				<span class="material-symbols-outlined text-white px-5 text-3xl">push_pin</span>
					<h1 className=" text-white text-3xl">Post a job and hire top talent</h1>
				</div>
				<div className=" flex justify-center py-5">
					<span class="material-symbols-outlined text-white px-5 text-3xl">stars</span>
					<h1 className=" text-white text-3xl">Work with the best—without breaking the bank</h1>
				</div>
			</div>
		</div>
		<div className="catagories">
			<h1 className=" text-white text-4xl my-5 mt-10 ml-10">Brows by caragories:</h1>
			<div className="cata-row1 flex justify-center">
				<div className=" mx-10 my-10">
					<div className=" my-20 h-[40vh] w-[30vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
					<img className=" h-[35vh] w-[25vw] my-2 mx-5 object-cover absolute" src={it} alt="ai" />
						<h1 className="text-white text-2xl p-5 relative">Development & IT</h1>
						<p className=" text-gray-300 px-5 relative">1000+ Skills</p>
					</div>
					<div className="h-[40vh] w-[30vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
						<img className=" h-[35vh] w-[25vw] my-2 mx-5 object-cover absolute" src={ai} alt="ai" />
						<h1 className="text-white text-2xl p-5 relative">AI Services</h1>
						<p className=" text-gray-300 px-5 relative">600+ Skills</p>
					</div>
				</div>
				<div className="my-20 mx-5">
					<div className=" my-20 h-[40vh] w-[30vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
					<img className=" h-[35vh] w-[25vw] my-2 mx-5 object-cover absolute" src={design} alt="ai" />
						<h1 className="text-white text-2xl p-5 relative">Design & Creation</h1>
						<p className=" text-gray-300 px-5 relative">900+ Skills</p>
					</div>
					<div className="h-[40vh] w-[30vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
					<img className=" h-[35vh] w-[25vw] my-2 mx-5 object-cover absolute" src={business} alt="ai" />
						<h1 className="text-white text-2xl p-5 relative">Sales & Marketing</h1>
						<p className=" text-gray-300 px-5 relative">200+ Skills</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}